namespace BackendTravel.Models.DTOs;

public class ViajeDTOs
{
    public int Id { get; set; }
    public string Origen { get; set; }
    public string Destino { get; set; }
    public DateTime FechaInicioProgramado { get; set; }
    public DateTime FechaFinProgramado { get; set; }
    public string Operador { get; set; }

}