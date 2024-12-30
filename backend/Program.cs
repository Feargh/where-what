using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RecommendationList.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc(
        "v1",
        new OpenApiInfo
        {
            Title = "RecommendationList API",
            Description = "Giving the Recommendations you love",
            Version = "v1"
        }
    );
});

var connectionString =
    builder.Configuration.GetConnectionString("Recommendations")
    ?? "Data Source=Recommendations.db";
builder.Services.AddDbContext<RecommendationDb>(options =>
    options.UseSqlite(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "RecommendationList API V1");
    });
}

app.MapGet(
    "/recommendation",
    async (RecommendationDb db) => await db.Recommendations.ToListAsync()
);

app.MapGet(
    "/city",
    async (RecommendationDb db) => await db.Cities.ToListAsync()
);

app.MapGet(
    "/recommendation/{id}",
    async (int id, RecommendationDb db) =>
        await db.Recommendations.FindAsync(id) is Recommendation recommendation
            ? Results.Ok(recommendation)
            : Results.NotFound()
);

app.MapGet(
    "/city/{id}",
    async (int id, RecommendationDb db) =>
        await db.Cities.FindAsync(id) is City city
            ? Results.Ok(city)
            : Results.NotFound()
);

app.MapGet(
    "/city/{cityId}/recommendations",
    async (int cityId, RecommendationDb db) =>
        await db.Recommendations.FindAsync(cityId) is Recommendation recommendation
            ? Results.Ok(recommendation)
            : Results.NotFound()
);

app.MapPost(
    "/recommendation",
    async (Recommendation recommendation, RecommendationDb db) =>
    {
        db.Recommendations.Add(recommendation);
        await db.SaveChangesAsync();

        return Results.Created($"/recommendation/{recommendation.Id}", recommendation);
    }
);

app.MapPost(
    "/city",
    async (City city, RecommendationDb db) =>
    {
        db.Cities.Add(city);
        await db.SaveChangesAsync();

        return Results.Created($"/city/{city.Id}", city);
    }
);

app.MapDelete(
    "/recommendation/{id}",
    async (int id, RecommendationDb db) =>
    {
        if (await db.Recommendations.FindAsync(id) is Recommendation recommendation)
        {
            db.Recommendations.Remove(recommendation);
            await db.SaveChangesAsync();
            return Results.NoContent();
        }

        return Results.NotFound();
    }
);

app.Run();
