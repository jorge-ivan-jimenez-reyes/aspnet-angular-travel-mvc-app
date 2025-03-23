
using AutoMapper;
using BackendTravel.Models.DTOs;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces; // Si tu repositorio está en otra carpeta
using BackendTravel.Services.Interfaces;

namespace BackendTravel.Services.Implementations
{
    public class ViajeService : IViajeService
    {
        private readonly IViajeRepository _viajeRepository;
        private readonly IMapper _mapper;

        public ViajeService(IViajeRepository viajeRepository, IMapper mapper)
        {
            _viajeRepository = viajeRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ViajeDto>> GetAllViajesAsync()
        {
            var viajes = await _viajeRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<ViajeDto>>(viajes);
        }

        public async Task<ViajeDto> GetViajeByIdAsync(int id)
        {
            var viaje = await _viajeRepository.GetByIdAsync(id);
            return _mapper.Map<ViajeDto>(viaje);
        }

        public async Task<ViajeDto> CreateViajeAsync(ViajeDto viajeDto)
        {
            var viajeEntity = _mapper.Map<Viaje>(viajeDto);
            await _viajeRepository.AddAsync(viajeEntity);
            return _mapper.Map<ViajeDto>(viajeEntity);
        }

        public async Task<bool> UpdateViajeAsync(ViajeDto viajeDto)
        {
            var viajeEntity = await _viajeRepository.GetByIdAsync(viajeDto.Id);
            if (viajeEntity == null) return false;

            _mapper.Map(viajeDto, viajeEntity);
            _viajeRepository.Update(viajeEntity);
            return true;
        }

        public async Task<bool> DeleteViajeAsync(int id)
        {
            var viajeEntity = await _viajeRepository.GetByIdAsync(id);
            if (viajeEntity == null) return false;

            _viajeRepository.Delete(viajeEntity);
            return true;
        }
    }
}
