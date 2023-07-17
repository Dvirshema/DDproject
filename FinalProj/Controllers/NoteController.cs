using Microsoft.AspNetCore.Mvc;
using FinalProj.Model;
using System.Collections.Generic;

namespace FinalProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : Controller
    {
        [HttpGet]
        public IEnumerable<Note> Get()
        {
            Note n = new Note();
            return n.Read();
        }


        [HttpPost]
        public IActionResult Post([FromBody] Note note)
        {
            int n = note.Insert();
            if (n > 0)
            {
                return Ok(n);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }
        }

        [HttpPut("UpdateNote")]
        public IActionResult Put(int noteNum, string noteContent)
        {
          
            int n = Note.Put(noteNum, noteContent);
            if (n > 0)
            {
                return Ok(n);
            }
            else
            {
                return NotFound("משהו השתבש, בבקשה נסה שוב");
            }

        }

        [HttpDelete("{noteNum}")]
        public IActionResult Delete(int noteNum)
        {
            // TODO, call Flight Delete method
            Note n = new Note();
            int num = n.Delete(noteNum);
            if (num == 1)
                return Ok();
            else
                return NotFound("id " + noteNum.ToString() + " was not found");
        }
    }
}
