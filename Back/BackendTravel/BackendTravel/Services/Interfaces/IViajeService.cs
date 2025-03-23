namespace BackendTravel.Services.Interfaces;

public interface IViajeService
{
    Task<IEnumerable<ViajeDto>> GetAllViajesAsync();
    Task<ViajeDto> GetViajeByIdAsync(int id);
    Task<ViajeDto> CreateViajeAsync(ViajeDto viajeDto);
    Task<bool> UpdateViajeAsync(ViajeDto viajeDto);
    Task<bool> DeleteViajeAsync(int id);
}
