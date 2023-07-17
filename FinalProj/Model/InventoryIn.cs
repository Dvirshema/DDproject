using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class InventoryIn
    {
        private int invNum;
        private int empNum;
        private DateTime invDate;
        private int matNum;
        private int invAmount;

        public int InvNum { get => invNum; set => invNum = value; }
        public int EmpNum { get => empNum; set => empNum = value; }
        public DateTime InvDate { get => invDate; set => invDate = value; }
        public int MatNum { get => matNum; set => matNum = value; }
        public int InvAmount { get => invAmount; set => invAmount = value; }


        public List<InventoryIn> Read()
        {
            DBservices db = new DBservices();
            return db.ReadInventoryIn();
        }

        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertInventoryIn(this);
        }
    }
}
