using FinalProj.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialController : Controller
    {
        [HttpGet]
        public IEnumerable<Material> Get()
        {
            Material m = new Material();
            return m.Read();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Material material)
        {
            int m = material.Insert();
            if (m > 0)
            {
                return Ok(m);
            }
            else
            {
                return NotFound("Error");
            }
        }

        [HttpPut("UpdateMatiral")]
        public IActionResult Put(int numMat,int amount)
        {
            //user.Email= id; // because the mail is the primary key
            int m = Material.Update(numMat, amount);
            if (m > 0)
            {
                return Ok(m);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }

        [HttpPut("UpdateMatiralAdmin")]
        public IActionResult AdminPut(int numMat, int amount)
        {
            
            int m = Material.AdminUpdate(numMat, amount);
            if (m > 0)
            {
                return Ok(m);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }

        [HttpPut("UpdateAllMaterial")]
        public IActionResult AllPut(int matNum, string matName, string matDesc)
        {
            int m = Material.DetailUpdate(matNum, matName, matDesc);
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
