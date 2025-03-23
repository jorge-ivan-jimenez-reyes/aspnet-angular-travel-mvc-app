namespace BackendTravel.Models.Entities;

public class Viaje
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public int OrigenId { get; set; }
    public int DestinoId { get; set; }
    public int TransporteId { get; set; }
    public int EstatusId { get; set; }
    public decimal? Costo { get; set; }
    public string? Descripcion { get; set; }
    public DateTime FechaCreacion { get; set; } = DateTime.Now;
    public DateTime? FechaModificacion { get; set; }

    // Relaciones de navegación
    public Lugar Origen { get; set; }
    public Lugar Destino { get; set; }
    public Transporte Transporte { get; set; }
    public EstatusViaje Estatus { get; set; }
}
