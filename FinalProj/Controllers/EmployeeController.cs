using FinalProj.Model;
using FinalProj.Model.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
  

        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {   
            Employee e = new Employee();
            return e.Read();
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{empNum}")]
        public ActionResult<Employee> GetEmployee(int empNum)
        {
            Employee employee = new Employee();
            employee = employee.ReadByNum(empNum);

            if (employee != null)
            {
                return Ok(employee);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            int e = employee.Insert();
            if (e > 0)
            {
                return Ok(e);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{UpdateEmployee}")]
        public IActionResult Put([FromBody] Employee employee)
        {
            //user.Email= id; // because the mail is the primary key
            int e = employee.Update();
            if (e > 0)
            {
                return Ok(employee);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }


        [HttpPut("UpdateNewPassword")]
        public IActionResult PassPut(int empnum, string empFirstName, string empLastName, string empPhone, string empEmail)
        {

            int e = Employee.ResetPassword(empnum, empFirstName, empLastName, empPhone, empEmail);
            if (e > 0)
            {
                return Ok(e);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }
    }
}
