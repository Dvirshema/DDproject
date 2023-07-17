$(document).ready(function(){
  
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
   
     let apiMat = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Material';
     ajaxCall('GET',apiMat,'',GetMat,Err);   

     let apiMac = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Machine';
     ajaxCall('GET',apiMac,'',GetMac,Err);   

     let apiPR = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipe';
     ajaxCall('GET',apiPR,'',GetPR,Err);  
   
     return false; 
    
})
   
function GetMat(MatArr) {  
  RanderMaterials(MatArr); 
}
   
function GetMac(MacArr) {
  RanderMachines(MacArr);
}

function GetPR(PRArr) {
  RanderProductRecipe(PRArr);
}

function Err(err) {
  console.log(err);
}

function RanderMaterials(MatArr) {
    let str = '<table id="MatTable">';
    str += '<tr id="trHeader">';
    str += "<td>תיאור חומר גלם</td>";
    str += "<td>שם</td>";
    str += "</tr>";
  
    MatArr.forEach((Mat) => {
      str += "<tr>";
      str += `<td>${Mat.materialDescription}</td>`;
      str += `<td>${Mat.materialName}</td>`;
      str += "</tr>";
    });
    str += "</table>";
    document.getElementById("right-top").innerHTML = str;
  }

  function RanderMachines(MacArr) {
    let str = '<table id="MacTable">';
    str += '<tr id="trHeader">';
    str += "<td>תיאור פעילות המכונה</td>";
    str += "<td>מספר מכונה</td>";
    str += "</tr>";
  
    MacArr.forEach((Mac) => {
      str += "<tr>";
      str += `<td>${Mac.machineDesc}</td>`;
      str += `<td>${Mac.machineNum}</td>`;
      str += "</tr>";
    });
    str += "</table>";
    document.getElementById("right-bottom").innerHTML = str;
  }

  function RanderProductRecipe(PRArr) {
    let str = '<table id="PRTable">';
    str += '<tr id="trHeader">';
    str += '<td>OCC</td>';
    str += '<td>מקרגלים</td>';
    str += '<td>עיתון</td>';
    str += '<td>שם הנייר</td>';
    str += '<td>קוד נייר</td>';
    str += '<td>מספר מכונה</td>';
    str += '</tr>';
  
    PRArr.forEach((PR) => {
      str += '<tr>';
      str += `<td>${PR.rawMat3}</td>`;
      str += `<td>${PR.rawMat2}</td>`;
      str += `<td>${PR.rawMat1}</td>`;
      str += `<td>${PR.productName}</td>`;
      str += `<td>${PR.productCode}</td>`;
      str += `<td>${PR.machineNum}</td>`;
      str += '</tr>';
    });
    str += "</table>";
    document.getElementById("left-bottom").innerHTML = str;
  }

  function checkValue() {
    let api = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipe';
    ajaxCall('GET',api,'',GetRecipeByMachine,Err);  
  }

  function GetRecipeByMachine(PRArr){
    var selectElement = document.getElementById("filter-machine");
    var selectedValue = selectElement.value;
    var MacValue = null;
    
    if (selectedValue === "2") {
      MacValue = 2;
    } else if (selectedValue === "8") {
      MacValue = 8;
    }       
    console.log(MacValue);
  
    if(MacValue==null){
      RanderProductRecipe(PRArr);
    }
    else{
    let str = '<table id="PRTable">';
    str += '<tr id="trHeader">';
    str += '<td>OCC</td>';
    str += '<td>מקרגלים</td>';
    str += '<td>עיתון</td>';
    str += '<td>שם הנייר</td>';
    str += '<td>קוד נייר</td>';
    str += '<td>מספר מכונה</td>';
    str += '</tr>';     
    PRArr.forEach(PR => {
    if (PR.machineNum==MacValue) {  

      str += '<tr>';
      str += `<td>${PR.rawMat3}</td>`;
      str += `<td>${PR.rawMat2}</td>`;
      str += `<td>${PR.rawMat1}</td>`;
      str += `<td>${PR.productName}</td>`;
      str += `<td>${PR.productCode}</td>`;
      str += `<td>${PR.machineNum}</td>`;
      str += '</tr>';
    }
    });   
    str += "</table>";
    document.getElementById('left-bottom').innerHTML = str;
    }
  }