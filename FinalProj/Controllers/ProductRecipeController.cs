using FinalProj.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductRecipeController : Controller
    {
        [HttpGet]
        public IEnumerable<ProductRecipe> Get()
        {
            ProductRecipe p = new ProductRecipe();
            return p.Read();
        }
    }
}
