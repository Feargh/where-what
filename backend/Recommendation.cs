using Microsoft.EntityFrameworkCore;
using System;

namespace RecommendationList.Models
{
    public class Recommendation
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; }
        public string? Description { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}
