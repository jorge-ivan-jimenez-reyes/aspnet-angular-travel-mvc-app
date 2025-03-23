using Microsoft.EntityFrameworkCore;
using BackendTravel.Models.Entities;
namespace BackendTravel.Data;

public class AppDbContext : DbContext
{
     public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

     public DbSet<Viaje> Viajes { get; set; }
     public DbSet<Lugar> Lugares { get; set; }
     public DbSet<Transporte> Transportes { get; set; }
     public DbSet<EstatusViaje> EstatusesViaje { get; set; }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
     {
          
          modelBuilder.Entity<Viaje>()
               .Property(v => v.Costo)
               .HasPrecision(10, 2); 

          
          modelBuilder.Entity<Viaje>()
               .HasOne(v => v.Origen)
               .WithMany(l => l.ViajesOrigen)
               .HasForeignKey(v => v.OrigenId)
               .OnDelete(DeleteBehavior.Restrict);

          modelBuilder.Entity<Viaje>()
               .HasOne(v => v.Destino)
               .WithMany(l => l.ViajesDestino)
               .HasForeignKey(v => v.DestinoId)
               .OnDelete(DeleteBehavior.Restrict);
     }
}