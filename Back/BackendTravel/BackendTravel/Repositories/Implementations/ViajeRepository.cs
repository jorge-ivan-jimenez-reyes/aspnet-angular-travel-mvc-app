namespace BackendTravel.Repositories.Implementations;

public class ViajeRepository : IViajeRepository
{
    private readonly ApplicationDbContext _context;

    public ViajeRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Viaje>> GetAllAsync()
    {
        return await _context.Viajes.ToListAsync();
    }

    // ... Resto de métodos
}
