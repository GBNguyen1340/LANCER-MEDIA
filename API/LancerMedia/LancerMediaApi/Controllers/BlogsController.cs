using AutoMapper;
using LancerMediaApi.Common;
using LancerMediaApi.DataModels.Models;
using LancerMediaApi.DataModels.ViewModels;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using static LancerMediaApi.Common.Enum.CommonEnum;

namespace LancerMediaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly LMContext _context;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly ILog _logger;

        public BlogsController(LMContext context, IMapper mapper, IOptions<AppSettings> appSettings, ILog logger)
        {
            _context = context;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: api/Blogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContentVM>>> GetBlogs()
        {
            if (_context.Contents == null)
            {
                return NotFound();
            }
            var contents = await _context.Contents.Where(x=>x.Type == ContentType.Blog.ToString() && x.DeletedFlg == false).ToListAsync();
            var responseData = _mapper.Map<IEnumerable<Content>, IEnumerable<ContentVM>>(contents);

            return Ok(responseData);
        }

        [HttpGet("{slug}")]
        public async Task<ActionResult<IEnumerable<ContentVM>>> GetBlogsBySlug(string slug)
        {
            if (_context.Contents == null)
            {
                return NotFound();
            }
            var content = await _context.Contents.FirstOrDefaultAsync(x => x.Type == ContentType.Blog.ToString() && x.DeletedFlg == false && x.Slug == slug);

            var responseData = _mapper.Map<Content, ContentVM>(content);

            return Ok(responseData);
        }
    }
}
