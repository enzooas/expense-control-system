using ControleGastos.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Data;

public class AppDbContext : DbContext
{
    public DbSet<Pessoa> Pessoas { get; set; }
    public DbSet<Transacao> Transacoes { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}