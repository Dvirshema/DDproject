$(document).ready(function () {
    
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
    
    document.getElementById("empNumIN").value = CurrentEmployee.empNum;
    document.getElementById("empNumIN").disabled = true;
    document.getElementById("empFirstNameIN").value = CurrentEmployee.empFirstName;
    document.getElementById("empLastNameIN").value = CurrentEmployee.empLastName;
    document.getElementById("empPhoneIN").value = CurrentEmployee.empPhone;
    document.getElementById("empEmailIN").value = CurrentEmployee.empEmail;
    document.getElementById("empPasswordIN").value = CurrentEmployee.empPassword;
    document.getElementById("empRoleNumIN").value = CurrentEmployee.empRoleNum;
    document.getElementById("empStatusIN").value = getValue(CurrentEmployee.empStatus);

    $('#empStatusIN').on('change', function() {
        if ($(this).is(':checked')) {
          $('#myCheckboxStatus').text('פעיל').removeClass('unactive').addClass('active');
        } else {
          $('#myCheckboxStatus').text('לא פעיל').removeClass('active').addClass('unactive');
        }
        return false;
    });

    
    $('#Form_container').submit(function (event) {

        // Prevent the form from submitting normally
        event.preventDefault();

        let empNum = $('#empNumIN').val();
        let empFirstName = $('#empFirstNameIN').val();
        let empLastName = $('#empLastNameIN').val();
        let empPhone = $('#empPhoneIN').val();
        let empEmail = $('#empEmailIN').val();
        let empPassword = $('#empPasswordIN').val();
        let empRoleNum = $('#empRoleNumIN').val();
        let empStatus = $('#empStatusIN').val();
        let empAdmin = CurrentEmployee.empAdmin;


        let EmployeetoUpdate = {
            empNum: empNum,
            empFirstName: empFirstName,
            empLastName: empLastName,
            empPhone: empPhone,
            empEmail: empEmail,
            empPassword: empPassword,
            empRoleNum: empRoleNum,
            empStatus:getValue(empStatus),
            empAdmin: empAdmin
        }
        let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Employee/${empNum}`
        ajaxCall('PUT', apiPUT, JSON.stringify(EmployeetoUpdate), PutSCB, Errror)

        return false;
    })
})


function PutSCB() {
    alert('העדכון עבר בהצלחה')
    if(CurrentEmployee.empAdmin == false){
         location.assign('../../User/HTML/Employees.html');
    }
    else{
        location.assign('../../Admin/HTML/EmployeeAdmin.html');
    }
   
}

function Errror(err) {
    console.log(err)
    alert('משהו השתבש, בבקשה נסה שוב')
}


function getValue() {
    var checkbox = document.querySelector('input[id="empStatusIN"]');
    if (checkbox.checked) {
      return true;
    } else {
      return false;
    }
 }





