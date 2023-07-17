using FinalProj.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Globalization;

namespace FinalProj.Model.DAL
{

    /// <summary>
    /// DBServices is a class created by me to provides some DataBase Services
    /// </summary>
    public class DBservices
    {

        public SqlDataAdapter da;
        public DataTable dt;
        private string myProjDB;

        public DBservices()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        //--------------------------------------------------------------------------------------------------
        // This method creates a connection to the database according to the connectionString name in the web.config 
        //--------------------------------------------------------------------------------------------------
        public SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json").Build();
            string cStr = configuration.GetConnectionString("myProjDB");
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        //--------------------------------------------------------------------------------------------------
        //   insert methods 
        //--------------------------------------------------------------------------------------------------
        public int InsertNewEmployee(Employee employee)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertEmployeeCommand("spInsertEmployee", con, employee); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int InsertNewRole(EmployeeRole role)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertRoleCommand("spInsertRole", con, role); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int InsertProductionReport(ProductionReport PReport)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
         
            // helper method to build the insert string

            cmd = CreateInsertProductionReportCommand("spInsertProductionReport", con, PReport); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertProductionPlan(ProductionPlan PP)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertProductionPlanCommand("spInsertProductionPlan", con, PP); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertNote(Note n)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertNoteCommand("spInsertNote", con, n); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertMachine(Machine m)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertMachineCommand("spInsertMachine", con, m); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertMaterial(Material m)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertMaterialCommand("spInsertMaterial", con, m); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertProductRecipe(ProductRecipeFrom PRF)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertProductRecipeCommand("spInsertRecipeIngredient", con, PRF); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------
        public int InsertInventoryIn(InventoryIn invIn)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertInventoryInCommand("spInsertInventoryIn", con, invIn); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        //--------------------------------------------------------------------------------------------------
        //   update methods 
        //--------------------------------------------------------------------------------------------------    
        public int UpdateEmployee(Employee employee)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertEmployeeCommand("spUpdateEmployee", con, employee); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateProductRecipeFrom(int machineNum, int productCode, int prodRecipeNum, int rawMatNum, int amountRequired)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateUpdateProductRecipeCommand("spUpdateProductRecipeFrom", con, machineNum, productCode, prodRecipeNum, rawMatNum, amountRequired); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateMaterial(int numMat,int amount)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateInsertAmountCommand("spUpdateMaterial", con, numMat, amount); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int AdminUpdateMaterial(int numMat, int amount)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateAdminInsertAmountCommand("spUpdateAdminMaterial", con, numMat, amount); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateNote(int noteNum, string noteContent)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateUpdateNoteCommand("spUpdateNote", con, noteNum, noteContent); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateMachine(int machineNum, string machineDesc)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateUpdateMachineCommand("spUpdateMachine", con, machineNum, machineDesc); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateMaterialDetails(int matNum, string matName, string matDesc)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateUpdateMaterialDetailsCommand("spUpdateMaterialDetails", con, matNum, matName, matDesc); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public int UpdateNewPassword(int empnum, string empFirstName, string empLastName, string empPhone, string empEmail)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            // helper method to build the insert string

            cmd = CreateUpdatePasswordCommand("spUpdatePassword", con, empnum, empFirstName, empLastName, empPhone, empEmail); // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //--------------------------------------------------------------------------------------------------
        //   read methods 
        //--------------------------------------------------------------------------------------------------
        public List<EmployeeRole> ReadRoles()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadAllRoles", con);             // create the command


            List<EmployeeRole> list = new List<EmployeeRole>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    EmployeeRole role = new EmployeeRole();
                    role.EmpRoleNum = Convert.ToInt32(dataReader["roleNum"]);
                    role.EmpRoleName = dataReader["roleName"].ToString();

                    list.Add(role);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<SmartReport> GetSmartReport()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("sp_GetSmartReport", con);             // create the command


            List<SmartReport> list = new List<SmartReport>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    SmartReport SR = new SmartReport();
                    {
                        SR.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                        SR.ReportDate = (DateTime)dataReader["prodRepDate"];
                        SR.ReportTime = dataReader["prodRepTime"].ToString();
                        SR.ProdPlanNum = Convert.ToInt32(dataReader["prodPlanNum"]);
                        SR.ProductCode = Convert.ToInt32(dataReader["productCode"]);
                        SR.RawMatNum = Convert.ToInt32(dataReader["rawMatNum"]);
                        SR.QuantityDiff = Convert.ToInt32(dataReader["QuantityDiff"]);
                        SR.QuantityNeto = Convert.ToInt32(dataReader["QuantityNeto"]);
                        SR.AmountReport = Convert.ToInt32(dataReader["amountReport"]);
                        SR.AmountLeft = Convert.ToInt32(dataReader["AmountLeft"]);
                        SR.IsValid = dataReader["isValid"].ToString();
                      

                    };

                    list.Add(SR);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<Employee> ReadEmployees()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadAllEmployees", con);             // create the command


            List<Employee> list = new List<Employee>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    Employee employee = new Employee();

                    employee.EmpNum = Convert.ToInt32(dataReader["empNum"]);
                    employee.EmpFirstName = dataReader["empFirstName"].ToString();
                    employee.EmpLastName = dataReader["empLastName"].ToString();
                    employee.EmpPhone = dataReader["empCellPhone"].ToString();
                    employee.EmpEmail = dataReader["empEmail"].ToString();
                    employee.EmpPassword = dataReader["empPassword"].ToString();
                    employee.EmpRoleNum = Convert.ToInt32(dataReader["roleNum"]);
                    employee.EmpStatus = (bool)dataReader.GetValue("empStatus");
                    employee.EmpAdmin = (bool)dataReader.GetValue("isAdmin");

                    list.Add(employee);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //public Employee ReadEmployeeByNumber(int empNum)
        //{
        //    SqlConnection con = null;
        //    SqlCommand cmd = null;

        //    try
        //    {
        //        con = connect("myProjDB"); // create the connection
        //    }
        //    catch (Exception ex)
        //    {
        //        // write to log
        //        throw ex;
        //    }

        //    try
        //    {
        //        cmd = CreateCommandReadByNumber("spReadEmployeeByNumber", empNum, con); // create the command

        //        SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

        //        if (dataReader.Read())
        //        {
        //            Employee employee = new Employee();

        //            employee.EmpNum = Convert.ToInt32(dataReader["empNum"]);
        //            employee.EmpFirstName = dataReader["empFirstName"].ToString();
        //            employee.EmpLastName = dataReader["empLastName"].ToString();
        //            employee.EmpPhone = dataReader["empCellPhone"].ToString();
        //            employee.EmpEmail = dataReader["empEmail"].ToString();
        //            employee.EmpPassword = dataReader["empPassword"].ToString();
        //            employee.EmpRoleNum = Convert.ToInt32(dataReader["roleNum"]);
        //            employee.EmpStatus = (bool)dataReader["empStatus"];
        //            employee.EmpAdmin = (bool)dataReader["isAdmin"];

        //            return employee;
        //        }

        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        // write to log
        //        throw ex;
        //    }
        //    finally
        //    {
        //        if (con != null)
        //        {
        //            // close the db connection
        //            con.Close();
        //        }
        //    }
        //}
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public string GetRoleNameByNum(int num)
        {
            SqlConnection con = null;
            SqlCommand cmd = null;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            cmd = CreateCommandRead("spGetRoleNameByNum", con);  // create the command
            cmd.Parameters.AddWithValue("@roleNum", num);  // add the parameter

            try
            {
                string roleName = null;

                using (SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                {
                    if (dataReader.Read())
                    {
                        roleName = dataReader.GetString(0);
                    }
                }

                if (roleName == null)
                {
                    throw new Exception("Role not found");
                }

                return roleName;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<ProductionReport> ReadProductionReport()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadProductionReport", con);             // create the command


            List<ProductionReport> list = new List<ProductionReport>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    ProductionReport PReport = new ProductionReport();

                    PReport.ReportNum = Convert.ToInt32(dataReader["prodRepNum"]);
                    PReport.EmpNum = Convert.ToInt32(dataReader["empNum"]);
                    PReport.ReportDate = (DateTime)dataReader["prodRepDate"];
                    PReport.ReportTime = dataReader["prodRepTime"].ToString();
                    PReport.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                    PReport.MaterialNum = Convert.ToInt32(dataReader["rawMatNum"]);
                    PReport.AmountRep = Convert.ToInt32(dataReader["amountReport"]);


                    list.Add(PReport);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------------
        public List<ProductionPlan> ReadProductionPlan()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadProductionPlan", con);             // create the command


            List<ProductionPlan> list = new List<ProductionPlan>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    ProductionPlan PP = new ProductionPlan();

                    PP.ProdPlanNum = Convert.ToInt32(dataReader["prodPlanNum"]);
                    PP.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                    PP.ProductCode = Convert.ToInt32(dataReader["productCode"]);
                    PP.ProductName = dataReader["productName"].ToString();
                    PP.SpatialWeight = Convert.ToSingle(dataReader["spatialWeight"]);
                    PP.AmountPlanned = Convert.ToSingle(dataReader["quantityPlanned"]);
                    PP.AmountDone = Convert.ToSingle(dataReader["quantityExecuted"]);
                    PP.StartDate = (DateTime)dataReader["startDate"];
                    PP.StartTime = dataReader["startTime"].ToString();
                    PP.ProductionTime = Convert.ToSingle(dataReader["requiredProdHours"]);


                    list.Add(PP);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------------
        public List<Note> ReadAllNotes()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadAllNote", con);             // create the command


            List<Note> list = new List<Note>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    Note n = new Note();

                    n.NoteNum = Convert.ToInt32(dataReader["noteNum"]);
                    n.NoteDate = (DateTime)dataReader["noteDate"];
                    n.EmpNum = Convert.ToInt32(dataReader["empNum"]);                   
                    n.NoteContent = dataReader["noteContent"].ToString();

                    list.Add(n);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------------------
        public List<InventoryIn> ReadInventoryIn()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadAllInventoryIn", con);             // create the command


            List<InventoryIn> list = new List<InventoryIn>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    InventoryIn invIn = new InventoryIn();

                    invIn.InvNum = Convert.ToInt32(dataReader["invInNum"]);
                    invIn.EmpNum = Convert.ToInt32(dataReader["empNum"]);
                    invIn.InvDate = (DateTime)dataReader["invInDate"];
                    invIn.MatNum = Convert.ToInt32(dataReader["rawMatNum"]);
                    invIn.InvAmount = Convert.ToInt32(dataReader["invInAmount"]);


                    list.Add(invIn);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<ProductRecipe> ReadProductRecipe()
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            cmd = CreateCommandRead("spReadRecipeIngredient", con); // create the command

            List<ProductRecipe> list = new List<ProductRecipe>();

            try
            {
                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {
                    ProductRecipe Pr = new ProductRecipe();

                    Pr.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                    Pr.ProductCode = Convert.ToInt32(dataReader["productCode"]);
                    Pr.ProductName = dataReader["productName"].ToString();
                    Pr.RawMat1 = dataReader["עיתון"].ToString();
                    Pr.RawMat2 = dataReader["מקרגלים"].ToString();
                    Pr.RawMat3 = dataReader["OCC"].ToString();

                    list.Add(Pr);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<Material> ReadMaterials()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadMaterial", con);             // create the command


            List<Material> list = new List<Material>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    Material material = new Material();

                    material.MaterialNum = Convert.ToInt32(dataReader["rawMatNum"]);
                    material.MaterialName = dataReader["rawMatName"].ToString();
                    material.Amount = Convert.ToInt32(dataReader["amountInInv"]);
                    material.MaterialDescription = dataReader["RawDescription"].ToString();

                    list.Add(material);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<Machine> ReadMachines()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadMachine", con);             // create the command


            List<Machine> list = new List<Machine>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    Machine machine = new Machine();

                    machine.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                    machine.MachineDesc = dataReader["machineDescription"].ToString();

                    list.Add(machine);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        public List<ProductRecipeFrom> ReadProductRecipeFrom()
        {


            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandRead("spReadProductRecipeFrom", con);             // create the command


            List<ProductRecipeFrom> list = new List<ProductRecipeFrom>();

            try
            {


                SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dataReader.Read())
                {

                    ProductRecipeFrom PRF = new ProductRecipeFrom();

                    PRF.MachineNum = Convert.ToInt32(dataReader["machineNum"]);
                    PRF.ProductCode = Convert.ToInt32(dataReader["productCode"]);
                    //PRF.ProductName = Convert.ToInt32(dataReader["amountInInv"]);
                    PRF.ProdRecipeNum = Convert.ToInt32(dataReader["prodRecipeNum"]);
                    PRF.RawMatNum = Convert.ToInt32(dataReader["rawMatNum"]);
                    PRF.AmountRequired = Convert.ToInt32(dataReader["amountRequired"]);

                    list.Add(PRF);
                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        //---------------------------------------------------------------------------------
        //    vDelete methods 
        //---------------------------------------------------------------------------------
        public int DeleteNote(int noteNum)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("myProjDB"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

            cmd = CreateCommandDelete("spDeleteFlight", con, noteNum);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //---------------------------------------------------------------------------------
        // Create the SqlCommand
        //---------------------------------------------------------------------------------

        private SqlCommand CreateInsertEmployeeCommand(String sp, SqlConnection con, Employee employee)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            cmd.Parameters.AddWithValue("@empNum", employee.EmpNum);
            cmd.Parameters.AddWithValue("@empFirstName", employee.EmpFirstName);
            cmd.Parameters.AddWithValue("@empLastName", employee.EmpLastName);
            cmd.Parameters.AddWithValue("@empCellPhone", employee.EmpPhone);
            cmd.Parameters.AddWithValue("@empEmail", employee.EmpEmail);
            cmd.Parameters.AddWithValue("@empPassword", employee.EmpPassword);
            cmd.Parameters.AddWithValue("@roleNum", employee.EmpRoleNum);
            cmd.Parameters.AddWithValue("@empStatus", employee.EmpStatus);
            cmd.Parameters.AddWithValue("@IsAdmin", employee.EmpAdmin);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateUpdateProductRecipeCommand(String sp, SqlConnection con, int machineNum, int productCode, int prodRecipeNum, int rawMatNum, int amountRequired)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            cmd.Parameters.AddWithValue("@machineNum", machineNum);
            cmd.Parameters.AddWithValue("@productCode", productCode);
            cmd.Parameters.AddWithValue("@prodRecipeNum", prodRecipeNum);
            cmd.Parameters.AddWithValue("@newRawMatNum", rawMatNum);
            cmd.Parameters.AddWithValue("@newAmountRequired", amountRequired);
        

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertProductionReportCommand(String sp, SqlConnection con, ProductionReport PReport)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);
     
            cmd.Parameters.AddWithValue("@empNum", PReport.EmpNum);
            cmd.Parameters.AddWithValue("@prodRepDate", PReport.ReportDate);
            cmd.Parameters.AddWithValue("@prodRepTime", PReport.ReportTime);
            cmd.Parameters.AddWithValue("@machineNum", PReport.MachineNum);
            cmd.Parameters.AddWithValue("@rawMatNum", PReport.MaterialNum);
            cmd.Parameters.AddWithValue("@amountReport", PReport.AmountRep);
            
            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertProductionPlanCommand(String sp, SqlConnection con, ProductionPlan PP)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

       
            cmd.Parameters.AddWithValue("@machineNum", PP.MachineNum);
            cmd.Parameters.AddWithValue("@productCode", PP.ProductCode);
            cmd.Parameters.AddWithValue("@productName", PP.ProductName);
            cmd.Parameters.AddWithValue("@spatialWeight", PP.SpatialWeight);
            cmd.Parameters.AddWithValue("@quantityPlanned", PP.AmountPlanned);
            cmd.Parameters.AddWithValue("@quantityExecuted", PP.AmountDone);
            cmd.Parameters.AddWithValue("@startDate", PP.StartDate);
            cmd.Parameters.AddWithValue("@startTime", PP.StartTime);
            cmd.Parameters.AddWithValue("@requiredProdHours", PP.ProductionTime);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertNoteCommand(String sp, SqlConnection con, Note n)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@noteDate", n.NoteDate);
            cmd.Parameters.AddWithValue("@empNum", n.EmpNum);
            cmd.Parameters.AddWithValue("@noteContent", n.NoteContent);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertMachineCommand(String sp, SqlConnection con, Machine m)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@machineNum", m.MachineNum);
            cmd.Parameters.AddWithValue("@machineDescription", m.MachineDesc);


            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertMaterialCommand(String sp, SqlConnection con, Material m)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@rawMatNum", m.MaterialNum);
            cmd.Parameters.AddWithValue("@rawMatName", m.MaterialName);
            cmd.Parameters.AddWithValue("@amountInInv", m.Amount);
            cmd.Parameters.AddWithValue("@RawDescription", m.MaterialDescription);


            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertProductRecipeCommand(String sp, SqlConnection con, ProductRecipeFrom PRF)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@machineNum", PRF.MachineNum);
            cmd.Parameters.AddWithValue("@productCode", PRF.ProductCode);
            cmd.Parameters.AddWithValue("@prodRecipeNum", PRF.ProdRecipeNum);
            cmd.Parameters.AddWithValue("@productName", PRF.ProductName);
            cmd.Parameters.AddWithValue("@rawMatNum", PRF.RawMatNum);
            cmd.Parameters.AddWithValue("@amountRequired", PRF.AmountRequired);


            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertInventoryInCommand(String sp, SqlConnection con, InventoryIn invIn)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@empNum", invIn.EmpNum);
            cmd.Parameters.AddWithValue("@invInDate", invIn.InvDate);
            cmd.Parameters.AddWithValue("@rawMatNum", invIn.MatNum);
            cmd.Parameters.AddWithValue("@invInAmount", invIn.InvAmount);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertAmountCommand(String sp, SqlConnection con, int matNum,int amount)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@rawMatNum", matNum);
            cmd.Parameters.AddWithValue("@amountInInv", amount);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------    
        private SqlCommand CreateAdminInsertAmountCommand(String sp, SqlConnection con, int matNum, int amount)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@rawMatNum", matNum);
            cmd.Parameters.AddWithValue("@amountInInv", amount);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateUpdateNoteCommand(String sp, SqlConnection con, int noteNum, string noteContent)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@noteNum", noteNum);
            cmd.Parameters.AddWithValue("@noteContent", noteContent);

            return cmd;
         }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateUpdateMachineCommand(String sp, SqlConnection con, int machineNum, string machineDesc)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@machineNum", machineNum);
            cmd.Parameters.AddWithValue("@machineDescription ", machineDesc);


            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateInsertRoleCommand(String sp, SqlConnection con, EmployeeRole role)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            cmd.Parameters.AddWithValue("@roleNum", role.EmpRoleNum);
            cmd.Parameters.AddWithValue("@roleName", role.EmpRoleName);
            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateCommandDelete(String spName, SqlConnection con, int noteNum)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            cmd.Parameters.AddWithValue("@noteNum", noteNum);


            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------

        private SqlCommand CreateUpdateMaterialDetailsCommand(String sp, SqlConnection con, int matNum, string matName, string matDesc)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@rawMatNum", matNum);
            cmd.Parameters.AddWithValue("@rawMatName", matName);
            cmd.Parameters.AddWithValue("@RawDescription", matDesc);

            return cmd;
        }
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------

        private SqlCommand CreateUpdatePasswordCommand(String sp, SqlConnection con, int empnum, string empFirstName, string empLastName, string empPhone, string empEmail)
        {


            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = sp;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            //cmd.Parameters.AddWithValue("@prodRepNum", PReport.ReportNum);

            cmd.Parameters.AddWithValue("@empNum", empnum);
            cmd.Parameters.AddWithValue("@empFirstName", empFirstName);
            cmd.Parameters.AddWithValue("@empLastName ", empLastName);
            cmd.Parameters.AddWithValue("@empCellPhone", empPhone);
            cmd.Parameters.AddWithValue("@empEmail", empEmail);

            return cmd;
        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        private SqlCommand CreateCommandRead(string spName, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            return cmd;
        }
    }
}    