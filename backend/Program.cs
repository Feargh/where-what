using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<RecommendationDb>(opt => opt.UseInMemoryDatabase("RecommendationList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();

app.MapGet("/recommendation", async (RecommendationDb db) =>
    await db.Recommendations.ToListAsync());

app.MapGet("/recommendation/{id}", async (int id, RecommendationDb db) =>
    await db.Recommendations.FindAsync(id)
        is Recommendation recommendation
            ? Results.Ok(recommendation)
            : Results.NotFound());

app.MapPost("/recommendation", async (Recommendation recommendation, RecommendationDb db) =>
{
    db.Recommendations.Add(recommendation);
    await db.SaveChangesAsync();

    return Results.Created($"/recommendation/{recommendation.Id}", recommendation);
});

app.MapDelete("/recommendation/{id}", async (int id, RecommendationDb db) =>
{
    if (await db.Recommendations.FindAsync(id) is Recommendation recommendation)
    {
        db.Recommendations.Remove(recommendation);
        await db.SaveChangesAsync();
        return Results.NoContent();
    }

    return Results.NotFound();
});


app.Run();
