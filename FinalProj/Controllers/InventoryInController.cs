using FinalProj.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryInController : Controller
    {
        [HttpGet]
        public IEnumerable<InventoryIn> Get()
        {
            InventoryIn inv = new InventoryIn();
            return inv.Read();
        }

        [HttpPost]
        public IActionResult Post([FromBody] InventoryIn invIn)
        {
            int inv = invIn.Insert();
            if (inv > 0)
            {
                return Ok(inv);
            }
            else
            {
                return NotFound("Faild to add a new employee");
            }
        }

    }

}
