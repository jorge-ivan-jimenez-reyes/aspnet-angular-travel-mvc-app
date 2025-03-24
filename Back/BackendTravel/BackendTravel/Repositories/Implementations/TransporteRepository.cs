using BackendTravel.Data;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BackendTravel.Repositories.Implementations;

public class TransporteRepository : ITransporteRepository
{
    private readonly AppDbContext _context;

    public TransporteRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Transporte>> GetAllAsync()
    {
        return await _context.Transportes.ToListAsync();
    }
}