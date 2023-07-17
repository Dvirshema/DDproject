$(document).ready(function(){
  
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
   
   let apiMat = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionPlan';
   ajaxCall('GET',apiMat,'',GetProductionPlan,Err);  
   
   let apiMac = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Machine';
   ajaxCall('GET',apiMac,'',GetMachineNum,Err);  

   $("#container").submit(function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    //== document.getElementById('XX')value;
    let machineNum = parseInt($("#machineNumIN").val());
    let productCode = parseInt($("#productCodeIN").val());
    let productName = $("#productNameIN").val();
    let spatialWeight = $("#spatialWeightIN").val();
    let amountPlanned = $("#plannedAmountIN").val();
    let amountDone = $("#amountDoneIN").val();
    let startDate = $("#startDateIN").val();
    let startTime = $("#startTimeIN").val();
    let productionTime = $("#productionTimeIN").val();

    //
    let PP = {};

    PP.machineNum = machineNum;
    PP.productCode = productCode;
    PP.productName = productName;
    PP.spatialWeight = spatialWeight;
    PP.amountPlanned = amountPlanned;
    PP.amountDone = amountDone;
    PP.startDate = startDate;
    PP.startTime = startTime;
    PP.productionTime = productionTime;

    //swagger
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionPlan";
    ajaxCall("POST", api, JSON.stringify(PP), Suc, Err);

    return false;
  });
    
})

function GetMachineNum(MacArr){

    let str = '<option value="NULL">בחר מכונת ייצור</option>';

    MacArr.forEach((machine) => {
      str += `<option value="${machine.machineNum}">${machine.machineNum}</option>`;
    });
    document.getElementById("machineNumIN").innerHTML = str;

}

function GetProductionPlan(ArrPP){

    let str = '<table id="PPTable">';
    str += '<tr id="trHeader">';
    str += '<td>טון/שעה</td>';
    str += '<td>שעות יצור</td>';
    str += '<td>שעת התחלה מתוכננת</td>';
    str += '<td>תאריך התחלה מתוכנן</td>';
    str += '<td>לביצוע</td>';
    str += '<td>בוצע</td>';
    str += '<td>כמות מתוכננת</td>';
    str += '<td>מ"מ</td>';
    str += '<td>שם נייר</td>';
    str += '<td>קוד נייר</td>';
    str += '<td>מספר מכונה</td>';
    str += '</tr>';
  
    ArrPP.forEach((PP) => {
      str += '<tr>';
      str += `<td>${((PP.amountPlanned-PP.amountDone)/PP.productionTime).toFixed(2)}</td>`;
      str += `<td>${PP.productionTime}</td>`;
      str += `<td>${PP.startTime}</td>`;
      str += `<td>${PP.startDate.replace("T00:00:00", "")}</td>`;
      str += `<td>${PP.amountPlanned-PP.amountDone}</td>`;
      str += `<td>${PP.amountDone}</td>`;
      str += `<td>${PP.amountPlanned}</td>`;
      str += `<td>${PP.spatialWeight}</td>`;
      str += `<td>${PP.productName}</td>`;
      str += `<td>${PP.productCode}</td>`;
      str += `<td>${PP.machineNum}</td>`;
      str += '</tr>';
    });
    str += '</table>';
    document.getElementById("productionPlanPH").innerHTML = str;

}


function checkProducts(){
    let apiPR = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipe';
    ajaxCall('GET',apiPR,'',GetPR,Err);  
}

function checkProductName() {
    let apiPR = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipe';
    ajaxCall('GET',apiPR,'',GetPRname,Err);  
}

function Err(err) {
    console.log(err);
}

function GetPR(PRArr) {
    RanderProductsCode(PRArr);
}

function GetPRname(PRArr) {
    RanderProductName(PRArr);
}

function RanderProductsCode(PRArr) {

    let machineNum=$('#machineNumIN').val();

    let str = '<option value="NULL">בחר קוד נייר</option>';

    PRArr.forEach((PR) => {
        if(PR.machineNum == machineNum)
      str += `<option value="${PR.productCode}">${PR.productCode}</option>`;
    });
    document.getElementById("productCodeIN").innerHTML = str;
}

function RanderProductName(PRArr) {

    let machineNum=$('#machineNumIN').val();
    let productCode=$('#productCodeIN').val();

    document.getElementById("productNameIN").value = "שם הנייר"

    PRArr.forEach((PR) => {
        if(PR.productCode == productCode && PR.machineNum == machineNum){
        document.getElementById("productNameIN").value = PR.productName;
        document.getElementById("productNameIN").disabled = true;
        }
        else if(productCode == null){
            document.getElementById("productNameIN").value = "שם הנייר";
        }

    });
}

function Suc(suc) {
    alert("הוספת תוכנית יצור עברה בהצלחה");
    location.assign("../HTML/ProductionPlanAdmin.html");
  }


