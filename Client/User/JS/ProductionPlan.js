$(document).ready(function(){
  
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
   
   let apiMat = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionPlan';
   ajaxCall('GET',apiMat,'',GetProductionPlan,Err);   

   
    return false;

})

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


function Err(err) {
    console.log("משהו השתבש, בבקשה נסה שוב מאוחר יותר");
}




