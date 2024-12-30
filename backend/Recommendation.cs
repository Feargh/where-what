using Microsoft.EntityFrameworkCore;
using System;

namespace RecommendationList.Models
{
    public class Recommendation
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Type { get; set; }
        public required string Description { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int CityId { get; set; } // Foreign key
        public City? City { get; set; } //Reference navigation property

    }
}
