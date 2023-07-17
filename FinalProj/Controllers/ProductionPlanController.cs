using FinalProj.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductionPlanController : Controller
    {
        [HttpGet]
        public IEnumerable<ProductionPlan> Get()
        {
            ProductionPlan PP = new ProductionPlan();
            return PP.Read();
        }
    

        [HttpPost]
        public IActionResult Post([FromBody] ProductionPlan prodPlan)
        {
          int pp = prodPlan.Insert();
          if (pp > 0)
          {
            return Ok(pp);
          }
          else
          {
            return NotFound("משהו השתבש, בבקשה נסה שוב");
          }
        }
    }
}
