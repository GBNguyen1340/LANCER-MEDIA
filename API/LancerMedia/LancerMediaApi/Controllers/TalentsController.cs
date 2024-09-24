using AutoMapper;
using LancerMediaApi.Common;
using LancerMediaApi.Common.Enum;
using LancerMediaApi.DataModels.Models;
using LancerMediaApi.DataModels.ViewModels;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace LancerMediaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalentsController : ControllerBase
    {
        private readonly LMContext _context;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly ILog _logger;

        public TalentsController(LMContext context, IMapper mapper, IOptions<AppSettings> appSettings, ILog logger)
        {
            _context = context;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: api/Talents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TalentVM>>> GetTalents()
        {
            if (_context.Talents == null)
            {
                return NotFound();
            }

            var talents = await _context.Talents.Where(x => x.DeletedFlg == false).ToListAsync();

            var responseData = _mapper.Map<IEnumerable<Talent>, IEnumerable<TalentVM>>(talents);

            return Ok(talents);
        }

        // GET: api/Talents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TalentVM>> GetTalent(Guid id)
        {
            if (_context.Talents == null)
            {
                return NotFound();
            }
            var talent = await _context.Talents.Where(x => x.DeletedFlg == false).FirstOrDefaultAsync(x => x.Id == id);

            if (talent == null)
            {
                return NotFound();
            }

            var responseData = _mapper.Map<Talent, TalentVM>(talent);

            // get avatar 
            var attFile = await _context.AttachedFiles.Where(x => x.DeletedFlg == false && x.RelatedId == responseData.Id).FirstOrDefaultAsync();
            if (attFile != null)
            {
                responseData.Avatar = FileHelper.GetUrlImageFromAbsolutePath(_appSettings.RootPath, attFile?.FilePath);
            }

            return Ok(responseData);
        }

        [HttpPut("UpdateProfilePicture/{id}")]
        public async Task<IActionResult> UpdateProfilePicture(Guid id, [FromForm] IFormFile file)
        {            
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

        // PUT: api/Talents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTalent(Guid id, CreateTalentVM talentVM)
        {
            var talent = await _context.Talents.FirstOrDefaultAsync(x => x.Id == id && x.DeletedFlg == false);
            if (talent == null)
            {
                return NotFound();
            }

            talent.Name = talentVM.Name;
            talent.Followers = talentVM.Followers;
            talent.Views = talentVM.Views;
            talent.TalentInfo = talentVM.TalentInfo;
            talent.Avatar = talentVM.Avatar;
            talent.FacebookUrl = talentVM.FacebookUrl;
            talent.Xurl = talentVM.Xurl;
            talent.InstagramUrl = talentVM.InstagramUrl;
            talent.YoutubeChannel = talentVM.YoutubeChannel;
            talent.WebsiteUrl = talentVM.WebsiteUrl;
            talent.ThreadUrl = talentVM.ThreadUrl;
            talent.ModifiedDate = DateTime.UtcNow;

            _context.Entry(talent).State = EntityState.Modified;

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

        // POST: api/Talents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TalentVM>> PostTalent([FromForm] CreateTalentVM talentVM)
        {
            if (_context.Talents == null)
            {
                return Problem("Entity set 'LMContext.Talents'  is null.");
            }

            // create talent object
            var talentId = Guid.NewGuid();

            var talent = new Talent();
            talent.Id = talentId;
            talent.Name = talentVM.Name;
            talent.TalentInfo = talentVM.TalentInfo;
            talent.Followers = talentVM.Followers;
            talent.Views = talentVM.Views;
            talent.Xurl = talentVM.Xurl;
            talent.WebsiteUrl = talentVM.WebsiteUrl;
            talent.InstagramUrl = talentVM.InstagramUrl;
            talent.FacebookUrl = talentVM.FacebookUrl;
            talent.ThreadUrl = talentVM.ThreadUrl;
            talent.YoutubeChannel = talentVM.YoutubeChannel;

            _context.Talents.Add(talent);

            try
            {
                await _context.SaveChangesAsync();

                // after create talent, upload the image to server and save to DB 
                string result = await UploadImage(talentVM.File, talentId);
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

            return Ok(talent);
        }

        // DELETE: api/Talents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTalent(Guid id)
        {
            if (_context.Talents == null)
            {
                return NotFound();
            }
            var talent = await _context.Talents.FindAsync(id);
            if (talent == null)
            {
                return NotFound();
            }

            talent.DeletedFlg = true;
            _context.Entry(talent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.Error(ex);
                if (!TalentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        private bool TalentExists(Guid id)
        {
            return (_context.Talents?.Any(e => e.Id == id && e.DeletedFlg == false)).GetValueOrDefault();
        }

        private async Task<string> UploadImage(IFormFile file, Guid talentId)
        {
            if (file == null) return string.Empty;
            var path = $"{_appSettings.RootPath}\\images\\{CommonEnum.FileRelatedType_Talent}\\{talentId}\\";

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
                        fileInfo.Type = CommonEnum.ContentType.Talent.ToString();

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
