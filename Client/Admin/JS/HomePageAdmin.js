
$(document).ready(function(){
  
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
   
    $("#form-container").submit(function (event) {
      // Prevent the form from submitting normally
      event.preventDefault();
  
      let noteDate = new Date().toJSON();
      let empNum = CurrentEmployee.empNum;
      let noteContent = $("#note-content").val();
  
      let NoteIn = {};
  
      NoteIn.noteDate = noteDate;
      NoteIn.empNum = empNum;
      NoteIn.noteContent = noteContent;
  
  
      //swagger
      let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/Note";
      ajaxCall("POST", api, JSON.stringify(NoteIn), Suc, Err);
      document.getElementById("form-content").reset();
      return false;    
    });

})
  
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

  function Suc() {
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/Note";
    ajaxCall("GET", api, "", GetAllNotes, Err);   
  }

  function RanderNotes(NoteArr){
    let str = '';
    NoteArr.forEach(n => {
   
      let apiGetName = `https://proj.ruppin.ac.il/cgroup42/prod/api/Employee/${n.empNum}`;
      ajaxCall("GET", apiGetName, "", GetFullName, Err);  

        str += `<div id="Emp-note">`;
        str += `<div id="Emp-note-header">`;
        str += `<h4 class="${n.empNum}"></h4>`;
        str += `</div>`; 
        str += `<div id="Emp-note-content">`;
        str += `<div id="right-note-content${n.noteNum}" contenteditable="false"><h5>${n.noteContent}</h5></div>`; 
        str += `</div>`;   
        str += `<div id="Emp-note-footer">`;
        str += `<button id="update-btn${n.noteNum}" class="update-btn" onclick="UpdateNote(${n.noteNum})">Update</button>`;
        str += `<h5>${n.noteDate.replace("T00:00:00", "")}</h5>`;
        str += `</div>`; 
        str += `</div>`; 
  });   
        
        document.getElementById('NotePH').innerHTML = str;
  }

  
  function GetFullName(Employee){
    if(Employee != null){
      let elements = document.getElementsByClassName(Employee.empNum);
      for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = Employee.empFirstName + " " + Employee.empLastName;
      }
    }
    else{
      console.log("problem");
    }
  }

  function showMessageForm() {
   
    document.getElementById("message-form").style.display = "block";
    
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/Note";
    ajaxCall("GET", api, "", GetAllNotes, Err);   
  }
  
  function Err(err) {
    alert("משהו השתבש, בבקשה נסה שוב מאוחר יותר");
    console.log(err);
  }
  
  function GetAllNotes(NoteArr) {
    RanderNotes(NoteArr);
  }


  function hideMessageForm() {
    document.getElementById("message-form").style.display = "none";
  }
  
  function UpdateNote(noteNum) {
    var textbox = document.getElementById("right-note-content"+noteNum);
    var updateBtn = document.getElementById("update-btn"+noteNum);
    
    if (updateBtn.innerHTML === "Update") {
      textbox.setAttribute("contenteditable", "true");
      textbox.focus();
      updateBtn.innerHTML = "Submit";
      updateBtn.setAttribute("id", "submit-btn"+noteNum);
      updateBtn.setAttribute("class", "submit-btn");
      updateBtn.setAttribute("onclick", "submitChanges("+noteNum+")");
    }
  }

  function Err(err) {
    console.log(err);
  }

  function PutSEC() {
    alert("מודעה עודכנה");
   
  }

  function submitChanges(noteNum) {

    var textbox = document.getElementById("right-note-content"+noteNum);
    var submitBtn = document.getElementById("submit-btn"+noteNum);

    if (submitBtn.innerHTML === "Submit"){
    textbox.setAttribute("contenteditable", "false");
    submitBtn.innerHTML = "Update";
    submitBtn.setAttribute("id", "update-btn"+noteNum);
    submitBtn.setAttribute("class", "update-btn");
    submitBtn.setAttribute("onclick", "UpdateNote("+noteNum+")");

    let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Note/UpdateNote?noteNum=${noteNum}&noteContent=${textbox.innerHTML}`;
    ajaxCall("PUT", apiPUT, "", PutSEC, Err);
    }
  }
      
