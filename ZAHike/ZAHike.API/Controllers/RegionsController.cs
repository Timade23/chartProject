using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZAHike.API.Data;
using ZAHike.API.Models.Domain;

namespace ZAHike.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RegionsController : ControllerBase
    {
        private readonly ZAHikeDbContext zAHikeDbContext;
        public RegionsController(ZAHikeDbContext zAHikeDbContext)
        {
            this.zAHikeDbContext = zAHikeDbContext;
        }

        [HttpGet]
       public async Task<IActionResult> GetAllRegions()
       {
            var listOfRegions = await zAHikeDbContext.Regions
                                    .Include(t => t.Trails)
                                    .ToListAsync();
            
            return Ok(listOfRegions);
        }
    }
}
