using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;

namespace BackendTravel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportesController : ControllerBase
    {
        private readonly ITransporteRepository _transporteRepository;

        public TransportesController(ITransporteRepository transporteRepository)
        {
            _transporteRepository = transporteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transporte>>> Get()
        {
            var transportes = await _transporteRepository.GetAllAsync();
            return Ok(transportes);
        }
    }
}
