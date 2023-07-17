using FinalProj.Model.DAL;
using System;
using System.Net;
using System.Net.Mail;
using System.Data.SqlClient;



namespace FinalProj.Model {

    public class Employee
    {
        
        private int empNum;
        private string empFirstName;
        private string empLastName;
        private string empPhone;
        private string empEmail;
        private string empPassword;
        private int empRoleNum;
        private bool empStatus;
        private bool empAdmin;


        public int EmpNum { get => empNum; set => empNum = value; }
        public string EmpFirstName { get => empFirstName; set => empFirstName = value; }
        public string EmpLastName { get => empLastName; set => empLastName = value; }
        public string EmpPhone { get => empPhone; set => empPhone = value; }
        public string EmpEmail { get => empEmail; set => empEmail = value; }
        public string EmpPassword { get => empPassword; set => empPassword = value; }
        public int EmpRoleNum { get => empRoleNum; set => empRoleNum = value; }
        public bool EmpStatus { get => empStatus; set => empStatus = value; }
        public bool EmpAdmin { get => empAdmin; set => empAdmin = value; }

        public List<Employee> Read()
        {
            DBservices db = new DBservices();
            return db.ReadEmployees();
        }

        public int Insert()
        {
            DBservices db = new DBservices();
            return db.InsertNewEmployee(this);
        }
        public int Update()
        {
            DBservices db = new DBservices();
            return db.UpdateEmployee(this);
        }

        public Employee ReadByNum(int empNum)
        {
            DBservices db = new DBservices();
            List<Employee> employees = db.ReadEmployees();
            return employees.FirstOrDefault(emp => emp.EmpNum == empNum);
        }

        static public int ResetPassword(int empnum, string empFirstName, string empLastName, string empPhone, string empEmail)
        {
            DBservices db = new DBservices();
            return db.UpdateNewPassword(empnum, empFirstName, empLastName, empPhone, empEmail);
        }

      
    }
} 
