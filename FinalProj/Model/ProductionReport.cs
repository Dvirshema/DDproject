using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class ProductionReport
    {
        private int reportNum;
        private int empNum;
        private DateTime reportDate;      
        private string reportTime;
        private int machineNum;
        private int materialNum;
        private int amountRep;

        public int ReportNum { get => reportNum; set => reportNum = value;}
        public int EmpNum { get => empNum; set => empNum = value; }
        public DateTime ReportDate { get => reportDate; set => reportDate = value; }
        public string ReportTime { get => reportTime; set => reportTime = value; }
        public int MachineNum { get => machineNum; set => machineNum = value; }
        public int MaterialNum { get => materialNum; set => materialNum = value; }
        public int AmountRep { get => amountRep; set => amountRep = value; }

        public List<ProductionReport> Read()
        {
            DBservices db = new DBservices();
            return db.ReadProductionReport();
        }


       public int Insert()
       {
           DBservices db = new DBservices();
           return db.InsertProductionReport(this);
       }


    }
}
