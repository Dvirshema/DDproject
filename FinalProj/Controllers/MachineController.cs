using FinalProj.Model;
using Microsoft.AspNetCore.Mvc;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : Controller
    {
        [HttpGet]
        public IEnumerable<Machine> Get()
        {
            Machine m = new Machine();
            return m.Read();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Machine machine)
        {
            int m = machine.Insert();
            if (m > 0)
            {
                return Ok(m);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }

        [HttpPut("UpdateMachine")]
        public IActionResult Put(int machineNum, string machineDesc)
        {

            int m = Machine.Update(machineNum, machineDesc);
            if (m > 0)
            {
                return Ok(m);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }
    }
}
