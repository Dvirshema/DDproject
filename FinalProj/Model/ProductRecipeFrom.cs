using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class ProductRecipeFrom
    {

        private int machineNum;
        private int productCode;
        private string productName;
        private int prodRecipeNum;
        private int rawMatNum;
        private int amountRequired;

        public int MachineNum { get => machineNum; set => machineNum = value; }
        public int ProductCode { get => productCode; set => productCode = value; }
        public string ProductName { get => productName; set => productName = value; }
        public int ProdRecipeNum { get => prodRecipeNum; set => prodRecipeNum = value; }
        public int RawMatNum { get => rawMatNum; set => rawMatNum = value; }
        public int AmountRequired { get => amountRequired; set => amountRequired = value; }

        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertProductRecipe(this);
        }

        static public int Update(int machineNum, int productCode, int prodRecipeNum, int rawMatNum, int amountRequired)
        {
            DBservices db = new DBservices();
            return db.UpdateProductRecipeFrom(machineNum, productCode, prodRecipeNum, rawMatNum, amountRequired);
        }

        public List<ProductRecipeFrom> Read()
        {
            DBservices db = new DBservices();
            return db.ReadProductRecipeFrom();
        }


    }
}
