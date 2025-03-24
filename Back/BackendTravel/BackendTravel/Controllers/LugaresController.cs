using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackendTravel.Models.Entities;
using BackendTravel.Repositories.Interfaces;
namespace BackendTravel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LugaresController : ControllerBase
    {
        private readonly ILugarRepository _lugarRepository;

        public LugaresController(ILugarRepository lugarRepository)
        {
            _lugarRepository = lugarRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lugar>>> Get()
        {
            var lugares = await _lugarRepository.GetAllAsync();
            return Ok(lugares);
        }
    }
}
