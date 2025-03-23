namespace BackendTravel.Models.Entities;

public class EstatusViaje
{
    public int Id { get; set; }
    public string Nombre { get; set; }

    public ICollection<Viaje> Viajes { get; set; }
}
