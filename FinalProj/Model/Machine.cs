using FinalProj.Model.DAL;

namespace FinalProj.Model
{
    public class Machine
    {
        private int machineNum;
        private string machineDesc;
      
        public int MachineNum { get => machineNum; set => machineNum = value; }
        public string MachineDesc { get => machineDesc; set => machineDesc = value; }

        public List<Machine> Read()
        {
            DBservices db = new DBservices();
            return db.ReadMachines();
        }
        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertMachine(this);
        }
        static public int Update(int machineNum, string machineDesc)
        {
            DBservices db = new DBservices();
            return db.UpdateMachine(machineNum, machineDesc);
        }
    }
}
