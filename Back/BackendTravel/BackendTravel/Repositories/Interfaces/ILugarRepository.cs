namespace BackendTravel.Repositories.Interfaces;
using BackendTravel.Models.Entities;

public interface ILugarRepository
{
    Task<IEnumerable<Lugar>> GetAllAsync();
}