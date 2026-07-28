using ControleGastos.API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var connectionString = builder.Configuration
    .GetConnectionString("DefaultConnection");

Console.WriteLine("==============================");
Console.WriteLine("BANCO UTILIZADO:");
Console.WriteLine(connectionString);
Console.WriteLine("==============================");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("ReactPolicy");

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    Console.WriteLine("==============================");
    Console.WriteLine("APLICANDO MIGRATIONS...");
    Console.WriteLine("==============================");

    context.Database.Migrate();

    Console.WriteLine("==============================");
    Console.WriteLine("MIGRATIONS FINALIZADAS");
    Console.WriteLine("==============================");


    var tabelas = context.Database
        .SqlQueryRaw<string>(
            "SELECT name FROM sqlite_master WHERE type='table'")
        .ToList();

    Console.WriteLine("TABELAS EXISTENTES:");

    foreach (var tabela in tabelas)
    {
        Console.WriteLine(tabela);
    }
}

app.Run();