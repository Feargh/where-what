using Microsoft.EntityFrameworkCore;

class RecommendationDb : DbContext
{
    public RecommendationDb(DbContextOptions<RecommendationDb> options)
        : base(options) { }

    public DbSet<Recommendation> Recommendations => Set<Recommendation>();
}