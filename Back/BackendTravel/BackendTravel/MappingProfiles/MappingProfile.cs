
using AutoMapper;
using BackendTravel.Models.Entities;
using BackendTravel.Models.DTOs;
using ViajeDTOs = BackendTravel.Models.DTOs.ViajeDTOs;

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
