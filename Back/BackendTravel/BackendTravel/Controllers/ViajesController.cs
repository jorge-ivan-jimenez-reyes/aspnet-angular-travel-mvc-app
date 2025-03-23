using BackendTravel.Models.Entities;
using BackendTravel.Models.DTOs;
using BackendTravel.Services.Interfaces; 
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendTravel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViajesController : ControllerBase
    {
        private readonly IViajeService _viajeService;
        private readonly ILogger<ViajesController> _logger;

        public ViajesController(IViajeService viajeService, ILogger<ViajesController> logger)
        {
            _viajeService = viajeService;
            _logger = logger;
        }

        // GET: api/viajes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ViajeDto>>> GetAll()
        {
            try
            {
                var viajes = await _viajeService.GetAllViajesAsync();
                return Ok(viajes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al obtener la lista de viajes");
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error interno");
            }
        }

        // GET: api/viajes/{id}
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ViajeDto>> GetById(int id)
        {
            try
            {
                var viaje = await _viajeService.GetViajeByIdAsync(id);
                if (viaje == null)
                    return NotFound("No se encontró el viaje solicitado.");

                return Ok(viaje);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al obtener el viaje con id {Id}", id);
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error interno");
            }
        }

        // POST: api/viajes
        [HttpPost]
        public async Task<ActionResult<ViajeDto>> Post([FromBody] ViajeDto viajeDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var nuevoViaje = await _viajeService.CreateViajeAsync(viajeDto);
                return CreatedAtAction(nameof(GetById), new { id = nuevoViaje.Id }, nuevoViaje);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al crear el viaje");
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error interno");
            }
        }

        // PUT: api/viajes/{id}
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] ViajeDto viajeDto)
        {
            try
            {
                if (id != viajeDto.Id)
                    return BadRequest("El ID del viaje no coincide con el de la ruta.");

                var actualizado = await _viajeService.UpdateViajeAsync(viajeDto);
                if (!actualizado)
                    return NotFound("No se encontró el viaje a actualizar.");

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al actualizar el viaje con id {Id}", id);
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error interno");
            }
        }

        // DELETE: api/viajes/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var eliminado = await _viajeService.DeleteViajeAsync(id);
                if (!eliminado)
                    return NotFound("No se encontró el viaje a eliminar.");

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al eliminar el viaje con id {Id}", id);
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error interno");
            }
        }
    }
}