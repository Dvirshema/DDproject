using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class Material
    {
        private int materialNum;
        private string materialName;
        private int amount;
        private string materialDescription;

        public int MaterialNum { get => materialNum; set => materialNum = value; }
        public string MaterialName { get => materialName; set => materialName = value; }
        public int Amount { get => amount; set => amount = value; }
        public string MaterialDescription { get => materialDescription; set => materialDescription = value; }
        public List<Material> Read()
        {
            DBservices db = new DBservices();
            return db.ReadMaterials();
        }
        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertMaterial(this);
        }
        static public int Update(int matNum,int amount)
        {
            DBservices db = new DBservices();
            return db.UpdateMaterial(matNum, amount);
        }
        static public int AdminUpdate(int matNum, int amount)
        {
            DBservices db = new DBservices();
            return db.AdminUpdateMaterial(matNum, amount);
        }
        static public int DetailUpdate(int matNum, string matName, string matDesc)
        {
            DBservices db = new DBservices();
            return db.UpdateMaterialDetails(matNum, matName, matDesc);
        }

    }
}
