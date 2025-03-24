using BackendTravel.Data;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BackendTravel.Repositories.Implementations
{
    public class LugarRepository : ILugarRepository
    {
        private readonly ApplicationDbContext _context;

        public LugarRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Lugar>> GetAllAsync()
        {
            return await _context.Lugares.ToListAsync();
        }
    }
}