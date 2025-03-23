namespace BackendTravel.Repositories.Interfaces;

public interface IViajeRepository
{
    Task<IEnumerable<Viaje>> GetAllAsync();
    Task<Viaje> GetByIdAsync(int id);
    Task AddAsync(Viaje viaje);
    void Update(Viaje viaje);
    void Delete(Viaje viaje);
}
