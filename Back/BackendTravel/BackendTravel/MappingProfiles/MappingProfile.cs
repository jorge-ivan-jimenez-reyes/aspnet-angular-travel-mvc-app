
using AutoMapper;
using BackendTravel.Models.Entities;
using BackendTravel.Models.DTOs;

namespace BackendTravel.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Viaje, ViajeDTOs>().ReverseMap();
        }
    }
}
