using BackendTravel.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendTravel.Controllers
{
    //localhost:xxxx/api/viajes
    [Route("api/[controller]")]
    [ApiController]
    public class ViajesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Viaje>> Get()
        {
            
        }
         
    }
}
