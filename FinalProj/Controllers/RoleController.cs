using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FinalProj.Model;
using FinalProj.Model.DAL;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : Controller
    {

        // GET
        [HttpGet]
        public IEnumerable<EmployeeRole> Get()
        {
            EmployeeRole r = new EmployeeRole();
            return r.Read();
        }


        [HttpGet("{num}")]
        public IActionResult GetRoleNameByNum(int num)
        {
            EmployeeRole r = new EmployeeRole();
            string roleName = r.GetRoleNameByNum(num);

            if (roleName == null)
            {
                return NotFound();
            }

            return Ok(roleName);
        }


        // POST 
        [HttpPost]
        public IActionResult Post([FromBody] EmployeeRole empRole)
        {
            int r = empRole.insert();
            if (r > 0)
            {
                return Ok(r);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }
    }
}
