namespace BackendTravel.Models.Entities;

public class Transporte
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string? Tipo { get; set; } // Ej. Avión, Bus
    public bool Activo { get; set; } = true;

    public ICollection<Viaje> Viajes { get; set; }
}
