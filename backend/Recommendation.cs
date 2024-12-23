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
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }

    }
}
