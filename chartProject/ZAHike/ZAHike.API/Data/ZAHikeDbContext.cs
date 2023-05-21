using Microsoft.EntityFrameworkCore;
using ZAHike.API.Models.Domain;

namespace ZAHike.API.Data
{
    public class ZAHikeDbContext:DbContext
    {
        public ZAHikeDbContext(DbContextOptions<ZAHikeDbContext> options): base(options) 
        {

        }
        public DbSet<Region> Regions { get; set; }
        public DbSet<HikeTrail> Trails { get; set; }
        public DbSet<TrailDifficulty> TrailDifficulty { get; set; }
    }
}
