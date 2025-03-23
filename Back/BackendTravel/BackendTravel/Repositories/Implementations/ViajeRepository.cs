using BackendTravel.Data;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackendTravel.Repositories.Implementations
{
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

        public async Task<Viaje> GetByIdAsync(int id)
        {
            return await _context.Viajes.FindAsync(id);
        }

        public async Task AddAsync(Viaje viaje)
        {
            await _context.Viajes.AddAsync(viaje);
            await _context.SaveChangesAsync();
        }

        public void Update(Viaje viaje)
        {
            _context.Viajes.Update(viaje);
            _context.SaveChanges();
        }

        public void Delete(Viaje viaje)
        {
            _context.Viajes.Remove(viaje);
            _context.SaveChanges();
        }
    }
}