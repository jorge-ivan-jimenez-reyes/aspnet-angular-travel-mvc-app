
using AutoMapper;
using BackendTravel.Models.Entities;
using BackendTravel.Models.DTOs;

namespace BackendTravel.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Mapeo bidireccional entre Viaje y ViajeDto
            CreateMap<Viaje, ViajeDTOs>().ReverseMap();
        }
    }
}
