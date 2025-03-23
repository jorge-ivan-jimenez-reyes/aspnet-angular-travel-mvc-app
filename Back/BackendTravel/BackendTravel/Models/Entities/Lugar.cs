namespace BackendTravel.Models.Entities;

public class Lugar
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string? Tipo { get; set; } // Ej. Ciudad, País, etc.
    public bool Activo { get; set; } = true;

    // Relación inversa (opcional)
    public ICollection<Viaje> ViajesOrigen { get; set; }
    public ICollection<Viaje> ViajesDestino { get; set; }
}
