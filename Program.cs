using helpdesk.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Connection string ile Azure SQL Server'a bağlan
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("HelpDeskDb")));

// CORS: React uygulamasından gelen istekleri kabul etmek için
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000", // Gerekirse diğer portları da ekle
            "http://localhost:3001",
            "http://localhost:3002"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

// Add services to the container
builder.Services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// HTTP request pipeline
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseRouting();      // ROUTING ÖNCE!
app.UseCors();         // CORS ORTADA!
app.UseAuthorization();

app.MapControllers();

app.Run();