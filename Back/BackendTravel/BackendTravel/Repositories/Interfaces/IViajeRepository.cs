using System.Collections.Generic;
using System.Threading.Tasks;
using BackendTravel.Models.Entities;

namespace BackendTravel.Repositories.Interfaces
{
    public interface IViajeRepository
    {
        Task<IEnumerable<Viaje>> GetAllAsync();
        Task<Viaje> GetByIdAsync(int id);
        Task AddAsync(Viaje viaje);
        Task UpdateAsync(Viaje viaje);
        Task DeleteAsync(Viaje viaje);
    }
}