namespace BackendTravel.Models.DTOs;

public class ViajeDTOs

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
}
