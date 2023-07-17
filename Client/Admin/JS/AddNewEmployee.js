$(document).ready(function(){

  $('#empStatusIN').on('change', function() {
    if ($(this).is(':checked')) {
      $('#myCheckboxStatus').text('פעיל').removeClass('unactive').addClass('active');
    } else {
      $('#myCheckboxStatus').text('לא פעיל').removeClass('active').addClass('unactive');
    }
  });
    
   
    $('#Form_container').submit(function(event){

        // Prevent the form from submitting normally
        event.preventDefault();

        //== document.getElementById('XX')value;
        let empNum=$('#empNumIN').val();
        let empFirstName=$('#empFirstNameIN').val();
        let empLastName=$('#empLastNameIN').val();
        let empPhone=$('#empPhoneIN').val();
        let empEmail=$('#empEmailIN').val();
        let empPassword=$('#empPasswordIN').val();
        let empRoleNum=$('#empRoleNumIN').val();
        let empStatus=$('#empStatusIN').val();
        let empAdmin = false;
 
        //
        let employee={};
        
        employee.empNum=empNum;
        employee.empFirstName=empFirstName;
        employee.empLastName=empLastName;
        employee.empPhone=empPhone;
        employee.empEmail=empEmail;
        employee.empPassword=empPassword;
        employee.empRoleNum=empRoleNum;
        employee.empStatus=getValue(empStatus);
        employee.empAdmin = empAdmin;

        //swagger
        let api='https://proj.ruppin.ac.il/cgroup42/prod/api/Employee'
        ajaxCall('POST',api,JSON.stringify(employee),Suc,Err);

        $(this).find("input[type=text], input[type=checkbox], select, textarea").val("");
        $(this).find("input[type=checkbox]").prop("checked", false);
        $(this).find("select").prop("selectedIndex", 0);
       
        return false;
      })
 })
    

function Suc(suc) {
    alert("הוספת משתמש עברה בהצלחה");
    location.assign('../HTML/EmployeeAdmin.html');   
 }
 

//Error
function Err(err) {
   alert("משהו השתבש, בבקשה נסה שוב")
   console.log(err)
  
}


function getValue() {
    var checkbox = document.querySelector('input[id="empStatusIN"]');
    if (checkbox.checked) {
      return true;
    } else {
      return false;
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