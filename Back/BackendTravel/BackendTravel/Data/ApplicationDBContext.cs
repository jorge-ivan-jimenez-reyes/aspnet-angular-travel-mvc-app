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
          base.OnModelCreating(modelBuilder);
          modelBuilder.Entity<EstatusViaje>().HasData(
               new EstatusViaje { Id = 1, Nombre = "Programado" },
               new EstatusViaje { Id = 2, Nombre = "En curso" },
               new EstatusViaje { Id = 3, Nombre = "Finalizado" },
               new EstatusViaje { Id = 4, Nombre = "Cancelado" }
          );
          
          
          modelBuilder.Entity<Lugar>().HasData(
               new Lugar { Id = 1, Nombre = "CDMX" },
               new Lugar { Id = 2, Nombre = "Guadalajara" },
               new Lugar { Id = 3, Nombre = "Monterrey" }
          );

          modelBuilder.Entity<Transporte>().HasData(
               new Transporte { Id = 1, Nombre = "Camión de pasajeros" },
               new Transporte { Id = 2, Nombre = "Camión de carga" },
               new Transporte { Id = 3, Nombre = "Camioneta tipo van" },
               new Transporte { Id = 4, Nombre = "Tráiler" }
          );

          
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