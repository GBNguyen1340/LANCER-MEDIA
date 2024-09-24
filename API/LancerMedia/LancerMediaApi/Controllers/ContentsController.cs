using AutoMapper;
using LancerMediaApi.Common;
using LancerMediaApi.Common.Enum;
using LancerMediaApi.DataModels.Models;
using LancerMediaApi.DataModels.ViewModels;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Formats.Tar;
using static LancerMediaApi.Common.Enum.CommonEnum;

namespace LancerMediaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentsController : ControllerBase
    {
        private readonly LMContext _context;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly ILog _logger;

        public ContentsController(LMContext context, IMapper mapper, IOptions<AppSettings> appSettings, ILog logger)
        {
            _context = context;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: api/Contents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContentVM>>> GetContents()
        {
            if (_context.Contents == null)
            {
                return NotFound();
            }
            var contents = await _context.Contents.ToListAsync();
            var responseData = _mapper.Map<IEnumerable<Content>, IEnumerable<ContentVM>>(contents);

            return Ok(responseData);
        }

        // GET: api/Contents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContentVM>> GetContent(Guid id)
        {
            if (_context.Contents == null)
            {
                return NotFound();
            }
            var content = await _context.Contents.FindAsync(id);

            if (content == null)
            {
                return NotFound();
            }

            // get thumnail file 
            var thumbnail = await _context.AttachedFiles.Where(x=>x.RelatedId == content.Id && x.DeletedFlg == false).FirstOrDefaultAsync();
            if (thumbnail != null)
            {
                content.ThumbnailId = thumbnail.Id;
                content.ThumbnailImgUrl = FileHelper.GetUrlImageFromAbsolutePath(_appSettings.RootPath, thumbnail?.FilePath);
            }

            var responseData = _mapper.Map<Content, ContentVM>(content);

            return Ok(responseData);
        }

        // PUT: api/Contents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContent(Guid id, ContentVM contentVM)
        {
            var content = await _context.Contents.FirstOrDefaultAsync(x => x.Id == id && x.DeletedFlg == false);
            if (content == null)
            {
                return NotFound();
            }

            if (contentVM.Title != content.Title)
            {
                content.Title = contentVM.Title;
                content.Slug = contentVM.Slug;
            }

            content.Summary = contentVM.Summary;
            content.FullContent = contentVM.FullContent;
            content.Type = contentVM.Type;
            content.ModifiedDate = DateTime.UtcNow;

            _context.Entry(content).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        // POST: api/Contents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContentVM>> PostContent([FromForm] ContentVM contentVM)
        {
            if (_context.Contents == null)
            {
                return Problem("Entity set 'LMContext.Contents'  is null.");
            }

            // create talent object
            var contentId = Guid.NewGuid();

            var content = new Content();
            content.Id = contentId;
            content.Title = contentVM.Title;
            content.Slug = contentVM.Slug;
            content.Summary = contentVM.Summary;
            content.FullContent = contentVM.FullContent;
            content.Type = contentVM.Type;

            _context.Contents.Add(content);

            try
            {
                await _context.SaveChangesAsync();

                // after create talent, upload the image to server and save to DB 
                string result = await UploadImage(contentVM.File, contentId);
            }
            catch (DbUpdateException ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return Ok(content);
        }

        [HttpPut("UpdateThumbnailPicture/{id}")]
        public async Task<IActionResult> updateThumbnailPicture(Guid id, [FromForm] IFormFile file)
        {
            var talent = await _context.Contents.FirstOrDefaultAsync(x => x.Id == id && x.DeletedFlg == false);
            if (talent == null)
            {
                return NotFound();
            }

            _context.Entry(talent).State = EntityState.Modified;

            try
            {
                string result = await UploadImage(file, id);
            }
            catch (DbUpdateException ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        // DELETE: api/Contents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContent(Guid id)
        {
            if (_context.Rooms == null)
            {
                return NotFound();
            }
            var content = await _context.Contents.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            content.DeletedFlg = true;
            _context.Entry(content).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.Error(ex);
                if (!ContentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        private bool ContentExists(Guid id)
        {
            return (_context.Contents?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private async Task<string> UploadImage(IFormFile file, Guid talentId)
        {
            if (file == null) return string.Empty;
            var path = $"{_appSettings.RootPath}\\images\\{CommonEnum.FileRelatedType_Other}\\{talentId}\\";

            if (file.Length > 0)
            {
                byte[] fileBytes = new byte[file.Length];
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    fileBytes = ms.ToArray();
                }

                try
                {
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }

                    using (FileStream filestream = new FileStream(path + file.FileName, FileMode.Create, FileAccess.Write, FileShare.Write, 4096))
                    {
                        //Resize image to width smaller
                        //------------------------------------------------------------------------------
                        var imageBytes400 = ImageHelper.Resize(fileBytes, 400, 400, SkiaSharp.SKFilterQuality.Low);

                        //new filename of file smaller 
                        var newFileName400w = string.Format($"{Path.GetFileNameWithoutExtension(file.FileName)}{Path.GetExtension(file.FileName)}");

                        using (var stream = new FileStream(path + newFileName400w, FileMode.Create, FileAccess.Write, FileShare.Write, 4096))
                        {
                            stream.Write(imageBytes400.Item1, 0, imageBytes400.Item1.Length);
                            stream.Flush();
                        }
                        //------------------------------------------------------------------------------

                        filestream.Flush();

                        // save data of image to db after upload to folder
                        AttachedFile fileInfo = new AttachedFile();
                        fileInfo.Id = Guid.NewGuid();
                        fileInfo.FileName = file.FileName;
                        fileInfo.FilePath = path + file.FileName;
                        fileInfo.ContentType = file.ContentType;
                        fileInfo.RelatedId = talentId;
                        fileInfo.ImgDimensions = string.Format("{0}x{1}", imageBytes400.Item2, imageBytes400.Item3);
                        fileInfo.ImgDimensionsSmall = string.Format("{0}x{1}", imageBytes400.Item2, imageBytes400.Item3);
                        fileInfo.Type = ContentType.Blog.ToString();

                        _context.AttachedFiles.Add(fileInfo);

                        await _context.SaveChangesAsync();

                        return fileInfo.Id.ToString();
                    }
                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    throw ex;
                }
            }
            else
            {
                return string.Empty;
            }
        }
    }
}
