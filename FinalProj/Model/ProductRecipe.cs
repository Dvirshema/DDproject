using FinalProj.Model.DAL;
namespace FinalProj.Model
{
    public class ProductRecipe
    {
        private int machineNum;
        private int productCode;
        private string productName;
        private string rawMat1;
        private string rawMat2;
        private string rawMat3;


        public int MachineNum { get => machineNum; set => machineNum = value; }
        public int ProductCode { get => productCode; set => productCode = value; }
        public string ProductName { get => productName; set => productName = value; }
        public string RawMat1 { get => rawMat1; set => rawMat1 = value; }
        public string RawMat2 { get => rawMat2; set => rawMat2 = value; }
        public string RawMat3 { get => rawMat3; set => rawMat3 = value; }

        public List<ProductRecipe> Read()
        {
            DBservices db = new DBservices();
            return db.ReadProductRecipe();
        }


    }
}
