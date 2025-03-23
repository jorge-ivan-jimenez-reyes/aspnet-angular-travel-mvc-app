
using BackendTravel.Models.DTOs;
namespace BackendTravel.Services.Interfaces
{
    public interface IViajeService
    {
        Task<IEnumerable<ViajeDTOs>> GetAllViajesAsync();
        Task<ViajeDTOs> GetViajeByIdAsync(int id);
        Task<ViajeDTOs> CreateViajeAsync(ViajeDTOs viajeDto);
        Task<bool> UpdateViajeAsync(ViajeDTOs viajeDto);
        Task<bool> DeleteViajeAsync(int id);
    }
}