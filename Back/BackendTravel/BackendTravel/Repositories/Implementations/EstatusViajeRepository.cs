using BackendTravel.Data;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BackendTravel.Repositories.Implementations;

public class EstatusViajeRepository : IEstatusViajeRepository
{
    private readonly AppDbContext _context;

    public EstatusViajeRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<EstatusViaje>> GetAllAsync()
    {
        return await _context.EstatusesViaje.ToListAsync();
    }
}