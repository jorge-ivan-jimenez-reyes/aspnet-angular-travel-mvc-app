
using BackendTravel.Models.Entities;

namespace BackendTravel.Repositories.Interfaces;

public interface IEstatusViajeRepository
{
    Task<IEnumerable<EstatusViaje>> GetAllAsync();
}