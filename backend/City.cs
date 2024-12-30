using Microsoft.EntityFrameworkCore;
using System;

namespace RecommendationList.Models
{
    public class City
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required double Latitude { get; set; }
        public required double Longitude { get; set; }
        public ICollection<Recommendation>? Recommendations { get; set; } = new List<Recommendation>();
    }
}
