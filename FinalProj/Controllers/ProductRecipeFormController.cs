using FinalProj.Model;
using FinalProj.Model.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductRecipeFormController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody] ProductRecipeFrom PRF)
        {
            int prf = PRF.Insert();
            if (prf > 0)
            {
                return Ok(prf);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }

        [HttpPut("UpdateMatiral")]
        public IActionResult Put(int machineNum, int productCode, int prodRecipeNum, int rawMatNum, int amountRequired)
        {
            //user.Email= id; // because the mail is the primary key
            int PRF = ProductRecipeFrom.Update(machineNum, productCode, prodRecipeNum, rawMatNum, amountRequired);
            if (PRF > 0)
            {
                return Ok(PRF);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }

        [HttpGet]
        public IEnumerable<ProductRecipeFrom> Get()
        {
            ProductRecipeFrom PRF = new ProductRecipeFrom();
            return PRF.Read();
        }


    }
}
