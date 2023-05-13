using System.ComponentModel.DataAnnotations;

namespace ZAHike.API.Models.Domain
{
    public class HikeTrail
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Length { get; set; }
        public Guid RegionId { get; set; }
        public Guid TrailDifficultyId { get; set; }

        //Navigation Property
        public Region Region { get; set; }
        public TrailDifficulty TrailDifficulty { get; set; }
    }
}
