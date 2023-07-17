$(document).ready(function () {
  CurrentEmployee = JSON.parse(sessionStorage.getItem("Employee"));
  document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';

  let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionReport";
  ajaxCall("GET", api, "", GETS, Err);

  let api2 = "https://proj.ruppin.ac.il/cgroup42/prod/api/Machine";
  ajaxCall("GET", api2, "", GetMachines, Err);

  let api3 = "https://proj.ruppin.ac.il/cgroup42/prod/api/Material";
  ajaxCall("GET", api3, "", GetMaterials, Err);


  $("#Form_container").submit(function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    //== document.getElementById('XX')value;
    let empNum = CurrentEmployee.empNum;
    let reportDate = $("#date-field").val();
    let reportTime = $("#hour-field").val();
    let machineNum = parseInt($("#machine-field").val());
    let materialNum = parseInt($("#raw-material-field").val());
    let amountRep = parseInt($("#amount-field").val());

    //
    let PReport = {};

    PReport.empNum = empNum;
    PReport.reportDate = reportDate;
    PReport.reportTime = reportTime;
    PReport.machineNum = machineNum;
    PReport.materialNum = materialNum;
    PReport.amountRep = amountRep;

    //swagger
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionReport";
    ajaxCall("POST", api, JSON.stringify(PReport), Suc, Err);

    return false;
  });
});

function GetMachines(MacArr){
  let str = '<option value="NULL">בחר מכונת ייצור</option>';

  MacArr.forEach((machine) => {
    str += `<option value="${machine.machineNum}">${machine.machineNum}</option>`;
  });
  document.getElementById("machine-field").innerHTML = str;
}

function GetMaterials(MatArr){
  let str = '<option value="NULL">בחר מכונת ייצור</option>';

  MatArr.forEach((material) => {
    str += `<option value="${material.materialNum}">${material.materialName}</option>`;
  });
  document.getElementById("raw-material-field").innerHTML = str;
}

function Suc(suc) {
  alert("הוספת דיווח על ייצור עברה בהצלחה");
  location.assign("../HTML/ProdRepPage.html");
}

//Error
function Err(err) {
  alert("משהו השתבש, בבקשה נסה שוב");
  console.log(err);
}

function GETS(PRarr) {
  RanderReports(PRarr);
}

function RanderReports(PRarr) {
  let str = '<table id="PRtable">';
  str += '<tr id="trHeader">';
  str += "<td>כמות (בטון)</td>";
  str += "<td>חומר גלם</td>";
  str += "<td>מספר מכונת ייצור</td>";
  str += "<td>שעה</td>";
  str += "<td>תאריך</td>";
  str += "<td>מספר עובד</td>";
  str += "<td>מספר דיווח ייצור</td>";
  str += "</tr>";

  PRarr.forEach((PR) => {
    str += "<tr>";
    str += `<td>${PR.amountRep}</td>`;
    str += `<td>${PR.materialNum}</td>`;
    str += `<td>${PR.machineNum}</td>`;
    str += `<td>${PR.reportTime.replace(":00", "")}</td>`;
    str += `<td>${PR.reportDate.replace("T00:00:00", "")}</td>`;
    str += `<td>${PR.empNum}</td>`;
    str += `<td>${PR.reportNum}</td>`;
    str += "</tr>";
  });
  str += "</table>";
  document.getElementById("reportTB").innerHTML = str;
}

