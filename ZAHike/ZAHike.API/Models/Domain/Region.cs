using System.ComponentModel.DataAnnotations;

namespace ZAHike.API.Models.Domain
{
    public class Region
    {
        [Key]
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public double Area { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public long Population { get; set; }

        //Navigation Property
        public IEnumerable<HikeTrail> Trails { get; set; }
    }
}
