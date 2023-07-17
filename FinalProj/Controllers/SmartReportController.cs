using FinalProj.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SmartReportController : Controller
    {
        [HttpGet]
        public IEnumerable<SmartReport> Get()
        {
            SmartReport pr = new SmartReport();
            return pr.Read();
        }
    }
}
