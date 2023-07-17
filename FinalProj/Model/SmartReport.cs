using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class SmartReport
    {
        private int machineNum;
        private DateTime reportDate;
        private string reportTime;
        private int prodPlanNum;
        private int productCode;
        private int rawMatNum;
        private decimal quantityDiff;
        private decimal quantityNeto;
        private int amountReport;
        private decimal amountLeft;
        private string isValid;

        public int MachineNum { get => machineNum; set => machineNum = value; }
        public DateTime ReportDate { get => reportDate; set => reportDate = value; }
        public string ReportTime { get => reportTime; set => reportTime = value; }
        public int ProdPlanNum { get => prodPlanNum; set => prodPlanNum = value; }
        public int ProductCode { get => productCode; set => productCode = value; }
        public int RawMatNum { get => rawMatNum; set => rawMatNum = value; }
        public decimal QuantityDiff { get => quantityDiff; set => quantityDiff = value; }
        public decimal QuantityNeto { get => quantityNeto; set => quantityNeto = value; }
        public int AmountReport { get => amountReport; set => amountReport = value; }
        public decimal AmountLeft { get => amountLeft; set => amountLeft = value; }
        public string IsValid { get => isValid; set => isValid = value; }

        public List<SmartReport> Read()
        {
            DBservices db = new DBservices();
            return db.GetSmartReport();
        }

    }
}
