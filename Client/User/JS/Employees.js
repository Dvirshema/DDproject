
$(document).ready(function(){
  
 CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
 document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';

  let api = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Employee';
  ajaxCall('GET',api,'',GETS,Errror);  
  
  let apiRole = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Role';
  ajaxCall('GET',apiRole,'',GetRoles,Errror);  

  return false; 
})

function GetRoles(RoleArr){
   
  let str =`<option value="">הכל</option>`;
  RoleArr.forEach(role => {

    str += `<option value="${role.empRoleNum}">${role.empRoleName}</option>`;
  });

  document.getElementById('filter-role').innerHTML = str;
}

function GETS(EmpArr) {
   
    RanderEmployees(EmpArr);
}

//Error
function Errror(err) {
   console.log(err)
}

 function RanderEmployees(EmpArr) {
  let str = '';
  EmpArr.forEach(e => {
    
    let statusColor = e.empStatus ? 'green' : 'red'; // set color based on empStatus
    let statusText = e.empStatus ? 'פעיל' : 'לא פעיל'; // set text based on empStatus
         
      str += `<div id="${e.empNum}" class="Emp"><h4 class="empHeader"><i class="material-icons" style="font-size:48px;color:rgb(255, 255, 255)">person</i></h4>`;
      str += `<h4> ${e.empFirstName} ${e.empLastName}</h4>`;
      str += `<h4> ${e.empNum}</h4>`;
      str += `<h4> ${e.empPhone}</h4>`;
      str += `<h4> ${e.empEmail}</h4>`;
      str += `<h4>${GETRoleName(e.empRoleNum)}</h4>`; 
      str += `<div class="Empfooter">`;
      str += `<h4 class="status-style" style="color: ${statusColor}"><strong>${statusText}</strong></h4>`;
      str += `</div></div>`; 
  }); 
   
      // Render HTML string to empPH div after the loop finishes
      document.getElementById('empPH').innerHTML = str;
 }



 function GETRoleName(empRoleNum){
  
  if(empRoleNum==1){
    return "מנהל לוגיסטיקה";
  }
  else if(empRoleNum==2){
    return "מנהל תפי";
  }
  else if(empRoleNum==3){
    return "מנהל משמרת";
  }
  else if(empRoleNum==4){
    return "מלגזן";
  }
  else if(empRoleNum==5){
    return "מנהל מכונה";
  }
  else{
    return "מנהל תפעול";
  }
}

function SUCRoleName(suc, empRoleNum){
  let roleName = JSON.parse(suc);
  let roleElem = document.getElementById(`roleName${empRoleNum}`);
  if (roleElem) {
    roleElem.innerHTML = roleName;
  }
}

  
function checkValueStatus() {
  let api = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Employee';
  ajaxCall('GET',api,'',GetByStatus,Errror);  
}

function checkValueRole() {
  let api = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Employee';
  ajaxCall('GET',api,'',GetByRole,Errror);  
}

function GetByStatus(EmpArr){
  var selectElement = document.getElementById("filter-Status");
  var selectedValue = selectElement.value;
  var booleanValue = null;
  
  if (selectedValue === "true") {
    booleanValue = true;
  } else if (selectedValue === "false") {
    booleanValue = false;
  }       
  console.log(booleanValue);

  if(booleanValue==null){
    RanderEmployees(EmpArr);
  }
  else{
  let str = '';      
  EmpArr.forEach(employee => {
  if (employee.empStatus==booleanValue) {     

    let statusColor = employee.empStatus ? 'green' : 'red'; // set color based on empStatus
    let statusText = employee.empStatus ? 'פעיל' : 'לא פעיל'; // set text based on empStatus  

    str += `<div id="${employee.empNum}" class="Emp"><h4 class="empHeader"><i class="material-icons" style="font-size:48px;color:rgb(255, 255, 255)">person</i></h4>`;
    str += `<h4> ${employee.empFirstName} ${employee.empLastName}</h4>`;
    str += `<h4> ${employee.empNum}</h4>`;
    str += `<h4> ${employee.empPhone}</h4>`;
    str += `<h4> ${employee.empEmail}</h4>`;
    str += `<h4>${GETRoleName(employee.empRoleNum)}</h4>`; 
    str += `<div class="Empfooter">`;
    str += `<h4 class="status-style" style="color: ${statusColor}"><strong>${statusText}</strong></h4>`;
    str += `</div></div>`; 
  }
  });   
  document.getElementById('empPH').innerHTML = str;
  }
}

function GetByRole(EmpArr){

  var selectElement = document.getElementById("filter-role");
  var selectedValue = selectElement.value;

  if(selectedValue==""){
    RanderEmployees(EmpArr);
  }
  else{
  let str = '';      
  EmpArr.forEach(employee => {
  if (employee.empRoleNum==selectedValue) {     

    let statusColor = employee.empStatus ? 'green' : 'red'; // set color based on empStatus
    let statusText = employee.empStatus ? 'פעיל' : 'לא פעיל'; // set text based on empStatus  

    str += `<div id="${employee.empNum}" class="Emp"><h4 class="empHeader"><i class="material-icons" style="font-size:48px;color:rgb(255, 255, 255)">person</i></h4>`;
    str += `<h4> ${employee.empFirstName} ${employee.empLastName}</h4>`;
    str += `<h4> ${employee.empNum}</h4>`;
    str += `<h4> ${employee.empPhone}</h4>`;
    str += `<h4> ${employee.empEmail}</h4>`;
    str += `<h4>${GETRoleName(employee.empRoleNum)}</h4>`; 
    str += `<div class="Empfooter">`;
    str += `<h4 class="status-style" style="color: ${statusColor}"><strong>${statusText}</strong></h4>`;
    str += `</div></div>`; 
  }
  });   
  document.getElementById('empPH').innerHTML = str;
  }
}



function changeColor(link) {
    // remove the "active" class from all links
    const links = document.querySelectorAll('nav a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    
    // add the "active" class to the clicked link
    link.classList.add('active');
  }
  
  // add an event listener to the dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener('click', function() {
    // remove the "active" class from all links
    const links = document.querySelectorAll('nav a');
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }
  
    // add the "active" class to the clicked link
    this.classList.add('active');
  });
}



