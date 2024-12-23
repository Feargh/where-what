using Microsoft.EntityFrameworkCore;
using System;

namespace RecommendationList.Models
{
    public class City
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Latitude { get; set; }
        public string? Longitude { get; set; }
        public ICollection<Recommendation>? Recommendations { get; set; }
    }
}
