using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ZAHike.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MusicController : ControllerBase
    {
        [HttpGet("gospel")]
        public string GospelMusic()
        {
            return "Gospel Music playing";
        }

        [HttpGet("rnb")]
        public string RnBMusic()
        {
            return "RnB Music playing";
        }

        [HttpGet("house")]
        public string HouseMusic()
        {
            return "House Music playing";
        }
    }
}
