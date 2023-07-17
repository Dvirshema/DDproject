allDB = [];

$(document).ready(function () {
  //CONNECT TO DATA BASE
  ref = firebase.database().ref("DB");

  listenToNewMessages();
  listentoUpdate();

  CurrentEmployee = JSON.parse(sessionStorage.getItem("Employee"));
  document.getElementById("EmpName").innerHTML =
    "" + CurrentEmployee.empFirstName + " " + CurrentEmployee.empLastName + "";

  let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/Material";
  ajaxCall("GET", api, "", GETSM, Errror);

  let api2 = "https://proj.ruppin.ac.il/cgroup42/prod/api/InventoryIn";
  ajaxCall("GET", api2, "", GETSI, Errror);

  $("#Form_container").submit(function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    //== document.getElementById('XX')value;
    let empNum = CurrentEmployee.empNum;
    let invDate = $("#date-field").val();
    let matNum = $("#raw-material-field").val();
    let invAmount = $("#amount-field").val();

    //
    let invIn = {};

    invIn.empNum = empNum;
    invIn.invDate = invDate;
    invIn.matNum = matNum;
    invIn.invAmount = invAmount;

    console.log(invIn.invDate);

    //swagger
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/InventoryIn";
    ajaxCall("POST", api, JSON.stringify(invIn), Suc, Errror);

    invIn.ID = allDB.length + 1;
    invIn.inTable = false;
    InsertObjToDB(invIn);

    return false;
  });
});


function InsertObjToDB(obj) {
  ref.push().set(obj);
}

function listenToNewMessages() {
  // child_added will be evoked for every child that was added
  // on the first entry, it will bring all the childs

  ref.on("child_added", (snapshot) => {
    const object = snapshot.val();
    allDB.push(object);
    console.log(object);
    if (GetTime() == object.invDate && object.inTable == false) {
      console.log(
        "BOOM",
        "Amount: " + object.invAmount,
        "TO: " + object.matNum
      );
      UpdateTheMatirelByDate(object);
    }
  });
}

//this function will update the matirel in the future by checking the date of the report.
function UpdateTheMatirelByDate(report) {
  let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Material/UpdateMatiral?numMat=${report.matNum}&amount=${report.invAmount}`;

  ref.once("value", (snapshot) => {
    snapshot.forEach((element) => {
      const el = element.val();
      if (el.ID == report.ID) {
        report.inTable = true;
        console.log(report, el);
        ref.child(element.key).set(report);
      }
    });
  });

  ajaxCall("PUT", apiPUT, "", PutSCB, Errror);
}

function listentoUpdate() {
  ref.on("child_changed", (snapshot) => {
    const Piecse = snapshot.val();
    console.log(Piecse);
  });
}

function GETSM(MatArr) {
  RanderMaterials(MatArr);
}

//Error
function Errror(err) {
  console.log(err);
}

function RanderMaterials(MatArr) {
  let str = "";
  MatArr.forEach((m) => {
   
    str += `<div id="matDiv">`;
    str += `<h4><strong>${m.materialName}</strong></h4>`;
    str += `<div id="amountDiv">`;
    str += `<h4><strong> ${m.amount}</strong></h4>`;
    str += `</div></div>`;
  });

 
  document.getElementById("MatPH").innerHTML = str;
}

function Suc(suc) {
  alert("הוספת מלאי עתידי עברה בהצלחה");
  location.assign("../HTML/StockPage.html");
}

function GETSI(InvArr) {
  RanderInventoryIn(InvArr);
}

function RanderInventoryIn(InvArr) {
  let str = '<table id="Invtable">';
  str += '<tr id="trHeader">';
  str += "<td>כמות (בטון)</td>";
  str += "<td>חומר גלם</td>";
  str += "<td>תאריך קבלת המלאי</td>";
  str += "<td>מספר עובד</td>";
  str += "<td>מספר הזמנה</td>";
  str += "</tr>";

  InvArr.forEach((inv) => {
    str += `<tr class="${DateDiff(GetTime(), inv.invDate)}">`;
    str += `<td>${inv.invAmount}</td>`;
    str += `<td>${GetnameByid(inv.matNum)}</td>`;
    str += `<td>${inv.invDate.replace("T00:00:00", "")}</td>`;
    str += `<td>${inv.empNum}</td>`;
    str += `<td>${inv.invNum}</td>`;
    str += "</tr>";
  });
  str += "</table>";
  document.getElementById("InvPH").innerHTML = str;
}



function DateDiff(startDate, EndDate) {
  let start = new Date(startDate);
  let end = new Date(EndDate);
  // console.log(end-start);
  let res = end - start;
  if (res >= 0) {
  } else {
    return "pastDate";
  }
}


function GetTime() {
  //return array of string [0]-->date [1]-->time
  let d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();

  if (month < 10) {
    month = "0" + (d.getMonth() + 1);
  }
  if (day < 10) {
    day = "0" + d.getDate();
  }
  if (hour < 10) {
    hour = "0" + d.getHours();
  }
  if (min < 10) {
    min = "0" + d.getMinutes();
  }

  const date = d.getFullYear() + "-" + month + "-" + day;
  const time = hour + ":" + min;
  const result = [date, time];

  return result[0];
}


function GetnameByid(id) {
  if (id == 1) {
    return "עיתון";
  } else if (id == 2) {
    return "מקרגלים";
  } else if (id == 3) {
    return "OCC";
  } else {
    alert("אין חומר גלם כזה");
  }
}
