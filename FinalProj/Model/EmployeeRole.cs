using FinalProj.Model.DAL;
using System.Xml.Linq;

namespace FinalProj.Model
{
    public class EmployeeRole
    {
        static List<EmployeeRole> rolelist = new List<EmployeeRole>();
         int empRoleNum;
         string empRoleName;

        public int EmpRoleNum { get => empRoleNum; set => empRoleNum = value; }
        public string EmpRoleName { get => empRoleName; set => empRoleName = value; }

        public int insert()
        {
            DBservices db = new DBservices();
            return db.InsertNewRole(this);
        }

        public List<EmployeeRole> Read()
        {
            DBservices db = new DBservices();
            return  db.ReadRoles();      
        }

        public string GetRoleNameByNum(int num)
        {
            DBservices db = new DBservices();
            return db.GetRoleNameByNum(num);
        }



    }
}
