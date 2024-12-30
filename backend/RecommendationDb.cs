using Microsoft.EntityFrameworkCore;


namespace RecommendationList.Models
{
    public class RecommendationDb : DbContext
    {
        public RecommendationDb(DbContextOptions<RecommendationDb> options) : base(options) { }
        public DbSet<Recommendation> Recommendations { get; set; }
        public DbSet<City> Cities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<City>()
                .HasMany(c => c.Recommendations)
                .WithOne(r => r.City)
                .HasForeignKey(r => r.CityId);

            // Seed data for City
            modelBuilder.Entity<City>().HasData(
                new City { Id = 1, Name = "Dublin", Latitude = 53.343835, Longitude = -6.263736 },
                new City { Id = 2, Name = "London", Latitude = 51.513666, Longitude = -0.130055 }
            );

            // Seed data for Recommendation without setting navigation property
            modelBuilder.Entity<Recommendation>().HasData(
                new Recommendation { Id = 1, Name = "The Stag's Head", Type = "Pub", Description = "Victorian red brick pub with great atmosphere", Latitude = 53.343835, Longitude = -6.263736, CityId = 1 },
                new Recommendation { Id = 2, Name = "Shack-Fuyu Soho", Type = "Japanese restaurant", Description = "Delicious Japanese food, don't miss the matcha french toast", Latitude = 51.513666, Longitude = -0.130055, CityId = 2 }
            );
        }

    }

}