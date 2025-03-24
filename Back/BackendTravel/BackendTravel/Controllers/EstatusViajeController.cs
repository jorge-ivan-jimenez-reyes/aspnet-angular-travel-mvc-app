using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;

namespace BackendTravel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstatusViajeController : ControllerBase
    {
        private readonly IEstatusViajeRepository _estatusRepository;

        public EstatusViajeController(IEstatusViajeRepository estatusRepository)
        {
            _estatusRepository = estatusRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstatusViaje>>> Get()
        {
            var estatuses = await _estatusRepository.GetAllAsync();
            return Ok(estatuses);
        }
    }
}
