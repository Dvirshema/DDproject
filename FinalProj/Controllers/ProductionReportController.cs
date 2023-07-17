using FinalProj.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductionReportController : Controller
    {

        [HttpGet]
        public IEnumerable<ProductionReport> Get()
        {
            ProductionReport pr = new ProductionReport();
            return pr.Read();
        }

        [HttpPost]
        public IActionResult Post([FromBody] ProductionReport PReport)
        {
            int pr = PReport.Insert();
            if (pr > 0)
            {
                return Ok(pr);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }


    }
}
