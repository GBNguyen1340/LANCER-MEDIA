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
    public class AttachedFilesController : ControllerBase
    {
        private readonly LMContext _context;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly ILog _logger;

        public AttachedFilesController(LMContext context, IMapper mapper, IOptions<AppSettings> appSettings, ILog logger)
        {
            _context = context;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: api/AttachedFiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttachedFileVM>>> GetAttachedFiles()
        {
            if (_context.AttachedFiles == null)
            {
                return NotFound();
            }
            var files = await _context.AttachedFiles.ToListAsync();
            var responseData = _mapper.Map<IEnumerable<AttachedFile>, IEnumerable<AttachedFileVM>>(files);

            return Ok(responseData);
        }

        // GET: api/AttachedFiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AttachedFileVM>> GetAttachedFile(Guid id)
        {
            if (_context.AttachedFiles == null)
            {
                return NotFound();
            }
            var file = await _context.AttachedFiles.FindAsync(id);

            if (file == null)
            {
                return NotFound();
            }

            var responseData = _mapper.Map<AttachedFile, AttachedFileVM>(file);

            return Ok(responseData);
        }        

        // POST: api/AttachedFiles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AttachedFileVM>> PostAttachedFile(IFormFile file, string fileRelatedType = CommonEnum.FileRelatedType_Other, Guid? relatedId = null )
        {
            var path = $"{_appSettings.RootPath}\\images\\{fileRelatedType}\\";

            if (relatedId != null)
                path += $"{relatedId}\\";

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
                        //Resize image to width 1600px
                        //------------------------------------------------------------------------------
                        var imageBytes1600 = ImageHelper.Resize(fileBytes, 1600, 1600, SkiaSharp.SKFilterQuality.Medium);
                        filestream.Write(imageBytes1600.Item1, 0, imageBytes1600.Item1.Length);
                        //------------------------------------------------------------------------------


                        //Resize image to width smaller
                        //------------------------------------------------------------------------------
                        var imageBytes300 = ImageHelper.Resize(fileBytes, 400, 400, SkiaSharp.SKFilterQuality.Low);

                        //new filename of file smaller 
                        var newFileName300w = string.Format($"{Path.GetFileNameWithoutExtension(file.FileName)}_300w_{Path.GetExtension(file.FileName)}");

                        using (var stream = new FileStream(path + newFileName300w, FileMode.Create, FileAccess.Write, FileShare.Write, 4096))
                        {
                            stream.Write(imageBytes300.Item1, 0, imageBytes300.Item1.Length);
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
                        fileInfo.RelatedId = relatedId;
                        fileInfo.ImgDimensions = String.Format("{0}x{1}", imageBytes1600.Item2, imageBytes1600.Item3);
                        fileInfo.ImgDimensionsSmall = String.Format("{0}x{1}", imageBytes300.Item2, imageBytes300.Item3);

                        _context.AttachedFiles.Add(fileInfo);

                        try
                        {
                            await _context.SaveChangesAsync();
                        }
                        catch (DbUpdateException ex)
                        {
                            _logger.Error(ex);
                            if (AttachedFileExists(fileInfo.Id))
                            {
                                return Conflict();
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

                        return CreatedAtAction("GetAttachedFiles", new { id = fileInfo.Id }, fileInfo);
                    }
                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.ToString());
                }
            }
            else
            {
                return BadRequest("Unsuccessful");
            }
        }

        // DELETE: api/AttachedFiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttachedFile(Guid id)
        {
            if (_context.AttachedFiles == null)
            {
                return NotFound();
            }
            var attachedFile = await _context.AttachedFiles.FindAsync(id);
            if (attachedFile == null)
            {
                return NotFound();
            }

            _context.AttachedFiles.Remove(attachedFile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AttachedFileExists(Guid id)
        {
            return (_context.AttachedFiles?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
