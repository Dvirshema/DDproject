CurrentEmployee = {};

$(document).ready(function(){

  CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));

  $('form').submit(function(event){

        // Prevent the form from submitting normally
        event.preventDefault();

        let empNum = $('#empNumIN').val();
      let empPass = $('#empPassIN').val();

      // Check if the "Remember me" checkbox is checked
      if ($('#rememberMe').is(':checked')) 
      {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('empNum', empNum);
          localStorage.setItem('empPass', empPass);
      } 
      else 
      {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('empNum');
          localStorage.removeItem('empPass');
      }

        let api='https://proj.ruppin.ac.il/cgroup42/prod/api/Employee';
        ajaxCall('GET',api,'',GETSUC,Errror);

  }); 

  $('#forgotPassword').click(function(event) {
        event.preventDefault();

        $('#loginForm').fadeOut(2000, function(){
            $('#forgotPasswordForm').fadeIn(2000);
        });
    });  
    
    // Check if the user has previously selected "Remember me"
  if (localStorage.getItem('rememberMe') == 'true') {
    $('#empNumIN').val(localStorage.getItem('empNum'));
    $('#empPassIN').val(localStorage.getItem('empPass'));
    $('#rememberMe').prop('checked', true);
}
});

function GETSUC(EmpArr) {
  let empNumIN=$('#empNumIN').val();
  let empPassIN=$('#empPassIN').val();
  console.log(EmpArr);

  EmpArr.forEach(employee => {
    if (employee.empNum==empNumIN && employee.empPassword==empPassIN ) {      
        if (employee.empStatus===false) {
            alert('סליחה, סטאטוס המשתמש לא פעיל');
        }
        else{              
            CurrentEmployee = employee;
            //alert('שלום '+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName);
            sessionStorage.setItem('Employee',JSON.stringify(CurrentEmployee));
            if (CurrentEmployee.empAdmin == true){
               location.assign('../CLIENT/Admin/HTML/HomePageAdmin.html');     
            }
            else{
              location.assign('../CLIENT/User/HTML/HomePage.html');  
            }
                    
         } 
    }     
});
  if (CurrentEmployee==null) {
    alert('מספר עובד או סיסמא לא תקינים')
  }
}

function Errror(err) {
  console.log(err)
  alert('משהו השתבש, בבקשה נסה שוב');
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  var passwordField = document.getElementById("empPassIN");
  var passwordEye = document.getElementById("password-eye");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordEye.className = "fa fa-eye-slash";
  } else {
    passwordField.type = "password";
    passwordEye.className = "fa fa-eye";
  }
}



function goBackToLoginForm() {
  document.getElementById("forgotPasswordForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function toggleForms() {
  var loginForm = document.getElementById("loginForm");
  var forgotPasswordForm = document.getElementById("forgotPassword")
}

function resetPassword() {
  var empNumIN = $('#empNumIN').val();
  var empFirstNameIN = $('#empFirstNameIN').val();
  var empLastNameIN = $('#empLastNameIN').val();
  var empPhoneNumIN = $('#empPhoneNumIN').val();
  var empEmailIN = $('#empEmailIN').val();
  
  let api =`https://proj.ruppin.ac.il/cgroup42/prod/api/Employee/UpdateNewPassword?empnum=${empNumIN}&empFirstName=${empFirstNameIN}&empLastName=${empLastNameIN}&empPhone=${empPhoneNumIN}&empEmail=${empEmailIN}`;
  ajaxCall("PUT", api, "", ResetSuc, Errror);
}

function ResetSuc(){
    alert("הסיסמא שלך עודכנה להיות 11111111, תוכל לשנות אותה בעת התחברות למערכות בעמוד עריכת פרטים אישיים");
    location.assign("LoginPage.html");
}