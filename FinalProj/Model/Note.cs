using FinalProj.Model.DAL;
namespace FinalProj.Model
{
    public class Note
    {

        private int noteNum;
        private DateTime noteDate;
        private int empNum;
        private string noteContent;

        public int NoteNum { get => noteNum; set => noteNum = value; }
        public DateTime NoteDate { get => noteDate; set => noteDate = value; }
        public int EmpNum { get => empNum; set => empNum = value; }
        public string NoteContent { get => noteContent; set => noteContent = value; }

        public List<Note> Read()
        {
            DBservices db = new DBservices();
            return db.ReadAllNotes();
        }

        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertNote(this);
        }

        static public int Put(int noteNum, string noteContent)
        {
            DBservices db = new DBservices();
            return db.UpdateNote(noteNum, noteContent);
        }

        public int Delete(int noteNum)
        {
            DBservices db = new DBservices();
            return db.DeleteNote(noteNum);
        }

    }
}
