using log4net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LancerMediaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LMController : ControllerBase
    {
        private readonly ILog _logger;
        private readonly LMContext _context;

    }
}
