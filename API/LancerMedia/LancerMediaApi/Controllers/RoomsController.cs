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
    public class RoomsController : ControllerBase
    {
        private readonly LMContext _context;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly ILog _logger;

        public RoomsController(LMContext context, IMapper mapper, IOptions<AppSettings> appSettings, ILog logger)
        {
            _context = context;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: api/Rooms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomVM>>> GetRooms()
        {
            if (_context.Rooms == null)
            {
                return NotFound();
            }

            var rooms = await _context.Rooms.Where(x => x.DeletedFlg == false).ToListAsync();
            var responseData = _mapper.Map<IEnumerable<Room>, IEnumerable<RoomVM>>(rooms);

            return Ok(responseData);
        }

        // GET: api/Rooms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoomVM>> GetRoom(Guid id)
        {
            if (_context.Rooms == null)
            {
                return NotFound();
            }
            var room = await _context.Rooms.Where(x => x.DeletedFlg == false).FirstOrDefaultAsync(x => x.Id == id);

            if (room == null)
            {
                return NotFound();
            }

            var responseData = _mapper.Map<Room, RoomVM>(room);

            return Ok(responseData);
        }

        [HttpGet("GetRoomPhoto/{id}")]
        public async Task<ActionResult<IEnumerable<AttachedFileVM>>> GetRoomPhoto(Guid id)
        {
            if (_context.AttachedFiles == null)
            {
                return NotFound();
            }
            var roomPhoto = await _context.AttachedFiles
                .Where(x => x.DeletedFlg == false && x.RelatedId == id && x.Type == CommonEnum.ContentType.Room.ToString())
                .ToListAsync();

            if (roomPhoto == null)
            {
                return NotFound();
            }

            var responseData = _mapper.Map<IEnumerable<AttachedFile>, IEnumerable<AttachedFileVM>>(roomPhoto);
            foreach (var item in responseData)
            {
                item.FileUrl = FileHelper.GetUrlImageFromAbsolutePath(_appSettings.RootPath, item.FilePath);
                item.FilePath = string.Empty;
            }
            return Ok(responseData);
        }

        [HttpPut("UploadRoomPhoto/{id}")]
        public async Task<IActionResult> UploadRoomPhoto(Guid id, [FromForm] IFormFile file)
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

        // PUT: api/Rooms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom(Guid id, CreateRoomVM roomVM)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(x => x.Id == id && x.DeletedFlg == false);
            if (room == null)
            {
                return NotFound();
            }

            room.Name = roomVM.Name;
            room.Description = roomVM.Description;
            room.Price = roomVM.Price;
            room.Type = roomVM.Type;
            room.ModifiedDate = DateTime.UtcNow;

            _context.Entry(room).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomExists(id))
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
                return BadRequest();
            }

            return NoContent();
        }

        // POST: api/Rooms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoomVM>> PostRoom(CreateRoomVM roomVM)
        {
            if (_context.Rooms == null)
            {
                return Problem("Entity set 'LMContext.Rooms'  is null.");
            }
            var room = _mapper.Map<CreateRoomVM, Room>(roomVM);
            room.Id = Guid.NewGuid();
            _context.Rooms.Add(room);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (RoomExists(room.Id))
                {
                    return Conflict();
                }
                else
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return Ok(room);
        }

        // DELETE: api/Rooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(Guid id)
        {
            if (_context.Rooms == null)
            {
                return NotFound();
            }
            var room = await _context.Rooms.FindAsync(id);
            if (room == null)
            {
                return NotFound();
            }

            room.DeletedFlg = true;
            _context.Entry(room).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (RoomExists(room.Id))
                {
                    return Conflict();
                }
                else
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        // DELETE: api/Rooms/5
        [HttpDelete("DeletePhotoRoom/{id}")]
        public async Task<IActionResult> DeletePhotoRoom(Guid id)
        {
            if (_context.AttachedFiles == null)
            {
                return NotFound();
            }
            var photo = await _context.AttachedFiles.FindAsync(id);
            if (photo == null)
            {
                return NotFound();
            }

            photo.DeletedFlg = true;
            _context.Entry(photo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        private bool RoomExists(Guid id)
        {
            return (_context.Rooms?.Any(e => e.Id == id && e.DeletedFlg == false)).GetValueOrDefault();
        }

        private async Task<string> UploadImage(IFormFile file, Guid talentId)
        {
            if (file == null) return string.Empty;
            var path = $"{_appSettings.RootPath}\\images\\{CommonEnum.FileRelatedType_Room}\\{talentId}\\";

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
                        fileInfo.Type = CommonEnum.ContentType.Room.ToString();

                        _context.AttachedFiles.Add(fileInfo);

                        await _context.SaveChangesAsync();

                        return fileInfo.Id.ToString();
                    }
                }
                catch (Exception ex)
                {
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
