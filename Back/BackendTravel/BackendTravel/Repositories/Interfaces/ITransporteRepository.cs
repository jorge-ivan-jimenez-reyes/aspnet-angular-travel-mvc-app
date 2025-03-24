

using BackendTravel.Models.Entities;


namespace BackendTravel.Repositories.Interfaces;
using BackendTravel.Models.Entities;
public interface ITransporteRepository
{
    Task<IEnumerable<Transporte>> GetAllAsync();
    
}