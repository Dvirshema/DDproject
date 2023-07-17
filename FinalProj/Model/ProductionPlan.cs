using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class ProductionPlan
    {
        private int prodPlanNum;
        private int machineNum;
        private int productCode;
        private string productName;
        private float spatialWeight;
        private float amountPlanned;
        private float amountDone;
        private DateTime startDate;
        private string startTime;
        private float productionTime;

        public int ProdPlanNum { get => prodPlanNum; set => prodPlanNum = value; }
        public int MachineNum { get => machineNum; set => machineNum = value; }
        public int ProductCode { get => productCode; set => productCode = value; }
        public string ProductName { get => productName; set => productName = value; }
        public float SpatialWeight { get => spatialWeight; set => spatialWeight = value; }
        public float AmountPlanned { get => amountPlanned; set => amountPlanned = value; }
        public float AmountDone { get => amountDone; set => amountDone = value; }
        public DateTime StartDate { get => startDate; set => startDate = value; }
        public string StartTime { get => startTime; set => startTime = value; }
        public float ProductionTime { get => productionTime; set => productionTime = value; }


        public List<ProductionPlan> Read()
        {
            DBservices db = new DBservices();
            return db.ReadProductionPlan();
        }

        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertProductionPlan(this);
        }



    }
}
