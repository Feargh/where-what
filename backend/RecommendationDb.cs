using Microsoft.EntityFrameworkCore;


namespace RecommendationList.Models
{
    public class RecommendationDb : DbContext
    {
        public RecommendationDb(DbContextOptions<RecommendationDb> options) : base(options) { }
        public DbSet<Recommendation> Recommendations { get; set; }
        public DbSet<City> Cities { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<City>()
        //        .HasMany(c => c.Recommendations)
        //        .WithOne(r => r.City)
        //        .HasForeignKey(r => r.CityId);
        //}
    }

}