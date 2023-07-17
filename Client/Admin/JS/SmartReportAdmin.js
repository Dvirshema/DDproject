$(document).ready(function () {

    CurrentEmployee = JSON.parse(sessionStorage.getItem("Employee"));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
  
    const api = `https://proj.ruppin.ac.il/cgroup42/prod/api/SmartReport`;
    ajaxCall("GET", api, "", RanderAllReports, ErrorCB);

    let api2 = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionPlan";
    ajaxCall("GET", api2, "", GETSP, Err);

    let api3 ="https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionReport";
    ajaxCall("GET", api3, "", GETSPR, Err);

    
});



function RanderAllReports(Reports){

    let str = `<table id="table">
    <tr id=tr-title>
        <td>
            <p>סטאטוס</p>
        </td>
        <td>
            <p>לביצוע (אחרי הדיווח)</p>
        </td>
        <td>
            <p>כמות מדווחת</p>
        </td>
        <td>
            <p>לביצוע (לפני הדיווח)</p>
        </td>
        <td>
            <p>כמות נדרשת</p>
        </td>
        <td>
            <p>חומר גלם</p>
        </td>
        <td>
            <p>קוד נייר</p>
        </td>
        <td>
            <p>מספר תוכנית ייצור</p>
        </td>    
        <td>
            <p>שעה</p>
        </td>
        <td>
            <p>תאריך</p>
        </td>
        <td>
            <p>מספר מכונה</p>
        </td>       
    </tr>`;

    for (let i = 0; i < Reports.length; i++) {
        
        const Rep = Reports[i];
    
    str += `<tr>`;
    if (Rep.isValid === 'Valid') {
        str += '<td style="background-color: #29b42f; text-align: center;"><p style="color: white;">&#x2713;</p></td>';
    } else if (Rep.isValid === 'Invalid') {
        str += '<td style="background-color: #f41e1e; text-align: center;"><p style="color: white;">&#x2718;</p></td>';
    } else {
        str += '<td></td>';
    }
        
        str += `<td><p>${Rep.amountLeft}</p></td>`; 
        str += `<td><p>${Rep.amountReport}</p></td>`;
        str += `<td><p>${Rep.quantityNeto}</p></td>`;
        str += `<td><p>${Rep.quantityDiff}</p></td>`;
        str += `<td><p>${Rep.rawMatNum}</p></td>`;
        str += `<td><p>${Rep.productCode}</p></td>`;
        str += `<td><p>${Rep.prodPlanNum}</p></td>`;
        str += `<td><p>${Rep.reportTime}</p></td>`;
        str += `<td><p>${Rep.reportDate.replace("T00:00:00", "")}</p></td>`;
        str += `<td><p>${Rep.machineNum}</p></td>`;
        str += "</tr>";
    }
      str += `</table>`;
      document.getElementById("Reports-PH").innerHTML = str;


      let InValid_8am = 0; let InValid_12pm = 0; let InValid_4pm = 0; let InValid_8pm = 0; let InValid_12am = 0; let InValid_4am = 0;
      
      let InValid_M1 = 0; let InValid_M2 = 0; let InValid_M3 = 0;

      let InValid_Sun = 0; let InValid_Mon = 0; let InValid_Tue = 0; let InValid_Wed = 0; let InValid_Thu = 0; let InValid_Fri = 0; let InValid_Sat = 0;
      
      for(let i = 0; i < Reports.length; i++){
        const Rep = Reports[i];
        if(Rep.isValid == 'Invalid'){
             if(Rep.reportTime == '08:00:00'){
              InValid_8am++;
             }
             if(Rep.reportTime == '12:00:00'){
              InValid_12pm++;
             }
             if(Rep.reportTime == '16:00:00'){
              InValid_4pm++;
             }
             if(Rep.reportTime == '20:00:00'){
              InValid_8pm++;
             }
             if(Rep.reportTime == '00:00:00'){
              InValid_12am++;
           }
           if(Rep.reportTime == '04:00:00'){
              InValid_4am++;
           }
        } 
      }
    
    var xValues = ['8:00','12:00','16:00','20:00','00:00','4:00'];
    var yValues = [InValid_8am, InValid_12pm, InValid_4pm, InValid_8pm, InValid_12am, InValid_4am]; 
    var barColors = ["#307443","#307443","#1aa942","#1aa942","#13e04c","#42f073"];
      
    new Chart("TimeChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "חריגות מתוכנית הייצור לפי שעות"
          }
        }
    
    });

    for(let i = 0; i < Reports.length; i++){
        const Rep = Reports[i];
        if(Rep.isValid == 'Invalid'){
             if(Rep.rawMatNum == 1){
                InValid_M1++;
             }
             if(Rep.rawMatNum == 2){
                InValid_M2++;
             }
             if(Rep.rawMatNum == 3){
                InValid_M3++;
             }        
        } 
      }

    var xValues = ["עיתון", "מקרגלים", "OCC"];
    var yValues = [InValid_M1, InValid_M2, InValid_M3];
    var barColors = [
      "#307443",
      "#1aa942",
      "#13e04c"
    ];

   new Chart("MaterialChart", {
     type: "pie",
     data: {
       labels: xValues,
       datasets: [{
         backgroundColor: barColors,
         data: yValues
       }]
     },
     options: {
       title: {
         display: true,
         text: "חריגות מתוכנית הייצור לפי חומר גלם"
       }
    }
   });

   for(let i = 0; i < Reports.length; i++){
    
    const Rep = Reports[i];
    
    const date = new Date(`${Rep.reportDate}`);
    const dayOfWeek  = date.getDay();

    if(Rep.isValid == 'Invalid'){
         if(dayOfWeek === 0){
            InValid_Sun++;
         }
         if(dayOfWeek === 1){
            InValid_Mon++;
         }
         if(dayOfWeek === 2){
            InValid_Tue++;
         } 
         if(dayOfWeek === 3){
            InValid_Wed++;
         }
         if(dayOfWeek === 4){
            InValid_Thu++;
         }
         if(dayOfWeek === 5){
            InValid_Fri++;
         }      
         if(dayOfWeek === 6){
            InValid_Sat++;
         }        
    } 
  }

   var x_Values = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
   var y_Values = [InValid_Sun,InValid_Mon,InValid_Tue,InValid_Wed,InValid_Thu,InValid_Fri,InValid_Sat];
   var barColors = ["#307443", "#307443", "#1aa942", "#1aa942", "#13e04c", "#13e04c", "#42f073",];

   new Chart("DayChart", {
     type: "bar",
     data: {
       labels: x_Values,
       datasets: [{
         backgroundColor: barColors,
         data: y_Values
       }]
     },
     options: {
       legend: {display: false},
       title: {
         display: true,
         text: "חריגות מתוכנית הייצור לפי יום בשבוע"
       }
     }
   });

}

function Err(err) {
    alert("Somthing went wrong, please try agin")
    console.log(err) 
}

function GETSP(PPArr) {
 RanderProductsPlan(PPArr);
}

function GETSPR(PRArr) {
    RanderReportsDate(PRArr);
}
   
function RanderReportsDate(PRArr) {
   
    var uniqueYears = [];

    PRArr.forEach(function(PR) {
      const date = new Date(`${PR.reportDate}`);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
  
    let str = "";
    str += `<option value="">הכל</option>`; 
    for (var i = 0; i < uniqueYears.length; i++) {
      str += `<option value=${uniqueYears[i]}>${uniqueYears[i]}</option>`; 
    }
    document.getElementById("YearIN").innerHTML = str;
}

  
function RanderProductsPlan(PPArr){
    let str = "";
    str += `<option value="">הכל</option>`;
    PPArr.forEach((pp) => {
      str += `<option value="${pp.prodPlanNum}">${pp.prodPlanNum}</option>`;
    });
    document.getElementById("prodPlanNumIN").innerHTML = str;
}

const SendServer = () => {
  const api = `https://proj.ruppin.ac.il/cgroup42/prod/api/SmartReport`;
  ajaxCall("GET", api, "", succsesCB, ErrorCB);
};

const Sendfillter = () => {
    const api = `https://proj.ruppin.ac.il/cgroup42/prod/api/SmartReport`;
    ajaxCall("GET", api, "", succses, ErrorCB);
};


const succses = (Reports) => {

    const filterYear = $("#YearIN").val();

    let InValid_8am = 0; let InValid_12pm = 0; let InValid_4pm = 0; let InValid_8pm = 0; let InValid_12am = 0; let InValid_4am = 0;
      
    let InValid_M1 = 0; let InValid_M2 = 0; let InValid_M3 = 0;

    let InValid_Sun = 0; let InValid_Mon = 0; let InValid_Tue = 0; let InValid_Wed = 0; let InValid_Thu = 0; let InValid_Fri = 0; let InValid_Sat = 0;
    
    for(let i = 0; i < Reports.length; i++){
      const Rep = Reports[i];

      const date = new Date(`${Rep.reportDate}`);
      const year = date.getFullYear();

      if(Rep.isValid == 'Invalid' && (filterYear == year || filterYear == '')){
        if(Rep.reportTime == '08:00:00'){
          InValid_8am++;
         }
         if(Rep.reportTime == '12:00:00'){
          InValid_12pm++;
         }
         if(Rep.reportTime == '16:00:00'){
          InValid_4pm++;
         }
         if(Rep.reportTime == '20:00:00'){
          InValid_8pm++;
         }
         if(Rep.reportTime == '00:00:00'){
          InValid_12am++;
       }
       if(Rep.reportTime == '04:00:00'){
          InValid_4am++;
       }
      } 
    }
  
    var xValues = ['8:00','12:00','16:00','20:00','00:00','4:00'];
    var yValues = [InValid_8am, InValid_12pm, InValid_4pm, InValid_8pm, InValid_12am, InValid_4am]; 
    var barColors = ["#307443","#307443","#1aa942","#1aa942","#13e04c","#42f073"];
    
  new Chart("TimeChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "חריגות מתוכנית הייצור לפי שעות"
        }
      }
  
  });

  for(let i = 0; i < Reports.length; i++){
      const Rep = Reports[i];

      const date = new Date(`${Rep.reportDate}`);
      const year = date.getFullYear();

      if(Rep.isValid == 'Invalid' && (filterYear == year || filterYear == '')){
           if(Rep.rawMatNum == 1){
              InValid_M1++;
           }
           if(Rep.rawMatNum == 2){
              InValid_M2++;
           }
           if(Rep.rawMatNum == 3){
              InValid_M3++;
           }        
      } 
    }

  var xValues = ["עיתון", "מקרגלים", "OCC"];
  var yValues = [InValid_M1, InValid_M2, InValid_M3];
  var barColors = [
    "#307443",
    "#1aa942",
    "#13e04c"
  ];

 new Chart("MaterialChart", {
   type: "pie",
   data: {
     labels: xValues,
     datasets: [{
       backgroundColor: barColors,
       data: yValues
     }]
   },
   options: {
     title: {
       display: true,
       text: "חריגות מתוכנית הייצור לפי חומר גלם"
     }
  }
 });

 for(let i = 0; i < Reports.length; i++){
  
  const Rep = Reports[i];
  
  const date = new Date(`${Rep.reportDate}`);
  const dayOfWeek  = date.getDay();
  const year = date.getFullYear();

  if(Rep.isValid == 'Invalid'&& (filterYear == year || filterYear == '')){
       if(dayOfWeek === 0){
          InValid_Sun++;
       }
       if(dayOfWeek === 1){
          InValid_Mon++;
       }
       if(dayOfWeek === 2){
          InValid_Tue++;
       } 
       if(dayOfWeek === 3){
          InValid_Wed++;
       }
       if(dayOfWeek === 4){
          InValid_Thu++;
       }
       if(dayOfWeek === 5){
          InValid_Fri++;
       }      
       if(dayOfWeek === 6){
          InValid_Sat++;
       }        
  } 
}

 var x_Values = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
 var y_Values = [InValid_Sun,InValid_Mon,InValid_Tue,InValid_Wed,InValid_Thu,InValid_Fri,InValid_Sat];
 var barColors = ["#307443", "#307443", "#1aa942", "#1aa942", "#13e04c", "#13e04c", "#42f073",];

 new Chart("DayChart", {
   type: "bar",
   data: {
     labels: x_Values,
     datasets: [{
       backgroundColor: barColors,
       data: y_Values
     }]
   },
   options: {
     legend: {display: false},
     title: {
       display: true,
       text: "חריגות מתוכנית הייצור לפי יום בשבוע"
     }
   }
 });

};
  

const ErrorCB = (err) => {
  console.log(err);
};
const succsesCB = (Reports) => {
  console.log(Reports);
  const machine = $("#machineIN").val();
  const ProdPlan = $("#prodPlanNumIN").val();
  const time = $("#timeIN").val();
  const date = $("#dateIN").val();
  
  let str = `<table id="table">
    <tr id=tr-title>
        <td>
            <p>סטאטוס</p>
        </td>
        <td>
            <p>לביצוע (אחרי הדיווח)</p>
        </td>
        <td>
            <p>כמות מדווחת</p>
        </td>
        <td>
            <p>לביצוע (לפני הדיווח)</p>
        </td>
        <td>
            <p>כמות נדרשת</p>
        </td>
        <td>
            <p>חומר גלם</p>
        </td>
        <td>
            <p>קוד נייר</p>
        </td>
        <td>
            <p>מספר תוכנית ייצור</p>
        </td>    
        <td>
            <p>שעה</p>
        </td>
        <td>
            <p>תאריך</p>
        </td>
        <td>
            <p>מספר מכונה</p>
        </td>       
    </tr>`;

    for (let i = 0; i < Reports.length; i++) {
        
        const Rep = Reports[i]; 

        const repDate = new Date(Rep.reportDate);
        repDate.setDate(repDate.getDate() + 1);
        const reportDateString = repDate.toISOString().substring(0, 10);

        const timeParts = Rep.reportTime.split(":");
        const formattedTime = timeParts[0] + ":" + timeParts[1];

        if (machine == '' && date == '' && time == '' && ProdPlan == '') {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == '' && time == '' && ProdPlan == '') {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == reportDateString && time == '' && ProdPlan == '') {
            str += RanderReport(Rep);
        }
        else if (machine == Rep.machineNum && date == reportDateString && time == formattedTime && ProdPlan == '') {
            str += RanderReport(Rep);
        }
        else if (machine == Rep.machineNum && date == reportDateString && time == formattedTime && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == '' && date == reportDateString && time == '' && ProdPlan == '') {
            str += RanderReport(Rep);
        }
        else if (machine == '' && date == reportDateString && time == formattedTime && ProdPlan == '') {
            str += RanderReport(Rep);
        }
        else if (machine == '' && date == reportDateString && time == formattedTime && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        }
        else if (machine == '' && date == '' && time == formattedTime && ProdPlan == '') {
            str += RanderReport(Rep);
        }  
        else if (machine == '' && date == '' && time == formattedTime && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == '' && date == '' && time == '' && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == '' && time == formattedTime && ProdPlan == '') {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == '' && time == formattedTime && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == reportDateString && time == '' && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == Rep.machineNum && date == '' && time == '' && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
        else if (machine == '' && date == reportDateString && time == '' && ProdPlan == Rep.prodPlanNum) {
            str += RanderReport(Rep);
        } 
    }
      str += `</table>`;
      document.getElementById("Reports-PH").innerHTML = str;
};

function RanderReport(Rep){
    
    let str='';
    str += `<tr>`;
    if (Rep.isValid === 'Valid') {
        str += '<td style="background-color: #29b42f; text-align: center;"><p style="color: white;">&#x2713;</p></td>';
    } else if (Rep.isValid === 'Invalid') {
        str += '<td style="background-color: #f41e1e; text-align: center;"><p style="color: white;">&#x2718;</p></td>';
    } else {
        str += '<td></td>';
    }
    
    str += `<td><p>${Rep.amountLeft}</p></td>`; 
    str += `<td><p>${Rep.amountReport}</p></td>`;
    str += `<td><p>${Rep.quantityNeto}</p></td>`;
    str += `<td><p>${Rep.quantityDiff}</p></td>`;
    str += `<td><p>${Rep.rawMatNum}</p></td>`;
    str += `<td><p>${Rep.productCode}</p></td>`;
    str += `<td><p>${Rep.prodPlanNum}</p></td>`;
    str += `<td><p>${Rep.reportTime}</p></td>`;
    str += `<td><p>${Rep.reportDate.replace("T00:00:00", "")}</p></td>`;
    str += `<td><p>${Rep.machineNum}</p></td>`;
    str += "</tr>";

    return str;

}

function OpenSystemRec() { 
    $("#System_recommendations").fadeIn(1000);

    let api = `https://proj.ruppin.ac.il/cgroup42/prod/api/SmartReport`;
    ajaxCall("GET", api, "", RanderRecommendations, ErrorCB);
}

function CloseModal() {
    $("#System_recommendations").fadeOut(500);
}

function RanderRecommendations(SRarr){

    let InValid_8am = 0; let InValid_12pm = 0; let InValid_4pm = 0; let InValid_8pm = 0; let InValid_12am = 0; let InValid_4am = 0;
    let R_8am = "הקפד על העברת הנחיות עבודה ברורות בתחילת כל משמרת אשר יהיו זמינות לעובדים לאורך המשמרת";
    let R_4am = "בצע רענון נהלים, הדרכה ומתתן דגשים עבור העבודה במשמרת הלילה ושקול הגברת פיקוח במשמרות אלו";
      
    let InValid_M1 = 0; let InValid_M2 = 0; let InValid_M3 = 0;
    let R_RawMat1 = "וודא כי חומר הגלם מסוג עיתון מסומן בצורה בולטת/מאופסן באזור ידוע מראש"
    let R_RawMat2 = "וודא כי חומר הגלם מסוג מקרגלים מסומן בצורה בולטת/מאופסן באזור ידוע מראש"
    let R_RawMat3 = "מסומן בצורה בולטת/מאופסן באזור ידוע מראש OCC וודא כי חומר הגלם מסוג"

    let InValid_Sun = 0; let InValid_Mon = 0; let InValid_Tue = 0; let InValid_Wed = 0; let InValid_Thu = 0; let InValid_Fri = 0; let InValid_Sat = 0;
    let R_WeekStart = "וודא כי לעובדים יש זמן הולם למנוחה בין המשמרות, הקפד על סבב עובדים על פני משמרות כדי למנוע מונוטוניות"
    let R_WeekEnd = "הגדר ציפיות ברורות לגבי תפוקות, זמינות, נהלים ואחריות העובדים ובצע שיחות משוב תקופתחיות בהן יועלו נקודות לשיפור מצד העובדים"

    let Invalid_Mac2 = 0; let Invalid_Mac8 = 0;
    let R_Mac2 = "ספק לוח זמנים לתחזוקה ותזכורת כדי להבטיח שמכונה 2 מתוחזקות ומכויילות כראוי";
    let R_Mac8 = "ספק לוח זמנים לתחזוקה ותזכורת כדי להבטיח שמכונה 8 מתוחזקות ומכויילות כראוי";

    let InValid_8130 = 0; let InValid_8134 = 0; let InValid_8136 = 0; let InValid_8141 = 0; let InValid_8205 = 0; let InValid_8216 = 0; let InValid_8207 = 0; let InValid_8208 = 0;
    let R_8130 = "ספק הדרכה והנחיות ספציפיות למוצר 8130 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8134 = "ספק הדרכה והנחיות ספציפיות למוצר 8134 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8136 = "ספק הדרכה והנחיות ספציפיות למוצר 8136 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8141 = "ספק הדרכה והנחיות ספציפיות למוצר 8141 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8205 = "ספק הדרכה והנחיות ספציפיות למוצר 8205 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8216 = "ספק הדרכה והנחיות ספציפיות למוצר 8216 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8207 = "ספק הדרכה והנחיות ספציפיות למוצר 8207 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";
    let R_8208 = "ספק הדרכה והנחיות ספציפיות למוצר 8208 על מנת להבטיח שהמפעילים פועלים לפי התהליכים הנכונים ומתשמשים בחומרי הגלם המתאימים";

    let str = '';
        str += '<div id="system_rec">';
        str += '<ul id="Rec_list">';

    for(let i = 0; i < SRarr.length; i++){
      
      const Rep = SRarr[i];

      if(Rep.isValid == 'Invalid'){
        if(Rep.reportTime == '08:00:00'){
          InValid_8am++;
         }
         if(Rep.reportTime == '12:00:00'){
          InValid_12pm++;
         }
         if(Rep.reportTime == '16:00:00'){
          InValid_4pm++;
         }
         if(Rep.reportTime == '20:00:00'){
          InValid_8pm++;
         }
         if(Rep.reportTime == '00:00:00'){
          InValid_12am++;
       }
       if(Rep.reportTime == '04:00:00'){
          InValid_4am++;
       }
      } 
    }

    for(let i = 0; i < SRarr.length; i++){
  
        const Rep = SRarr[i];
        
        const date = new Date(`${Rep.reportDate}`);
        const dayOfWeek  = date.getDay();
      
        if(Rep.isValid == 'Invalid'){
             if(dayOfWeek === 0){
                InValid_Sun++;
             }
             if(dayOfWeek === 1){
                InValid_Mon++;
             }
             if(dayOfWeek === 2){
                InValid_Tue++;
             } 
             if(dayOfWeek === 3){
                InValid_Wed++;
             }
             if(dayOfWeek === 4){
                InValid_Thu++;
             }
             if(dayOfWeek === 5){
                InValid_Fri++;
             }      
             if(dayOfWeek === 6){
                InValid_Sat++;
             }        
        } 
    }

    for(let i = 0; i < SRarr.length; i++){
        const Rep = SRarr[i];
  
        if(Rep.isValid == 'Invalid'){
             if(Rep.rawMatNum == 1){
                InValid_M1++;
             }
             if(Rep.rawMatNum == 2){
                InValid_M2++;
             }
             if(Rep.rawMatNum == 3){
                InValid_M3++;
             }        
        } 
      }

      for(let i = 0; i < SRarr.length; i++){
        const Rep = SRarr[i];
  
        if(Rep.isValid == 'Invalid'){
             if(Rep.machineNum == 2){
              Invalid_Mac2++;
             }
             if(Rep.machineNum == 8){
              Invalid_Mac8++;
             }    
        } 
      }

      for(let i = 0; i < SRarr.length; i++){
      
        const Rep = SRarr[i];
  
        if(Rep.isValid == 'Invalid'){
          if(Rep.productCode == 8130){
            InValid_8130++;
           }
           if(Rep.productCode == 8134){
            InValid_8134++;
           }
           if(Rep.productCode == 8136){
            InValid_8136++;
           }
           if(Rep.productCode == 8141){
            InValid_8141++;
           }
           if(Rep.productCode == 8205){
            InValid_8205++;
           }
           if(Rep.productCode == 8216){
            InValid_8216++;
           }
           if(Rep.productCode == 8207){
            InValid_8207++;
           }
           if(Rep.productCode == 8208){
            InValid_8208++;
           }
        } 
      }

    let maxTime = Math.max(InValid_8am, InValid_12pm, InValid_4pm, InValid_8pm, InValid_12am, InValid_4am)
    if(maxTime == InValid_8am){
        str += `<li>${R_8am}</li>`;
    }
    else if(maxTime == InValid_12am || InValid_4am){
        str += `<li>${R_4am}</li>`; 
    }

    let maxDay = Math.max(InValid_Sun, InValid_Mon, InValid_Tue, InValid_Wed, InValid_Thu, InValid_Fri, InValid_Sat)
    if(maxDay == InValid_Sun || maxDay == InValid_Mon){
        str += `<li>${R_WeekStart}</li>`;
     }
     else if(maxDay == InValid_Fri || maxDay == InValid_Sat){
         str += `<li>${R_WeekEnd}</li>`; 
     }

     let maxRawMat = Math.max(InValid_M1, InValid_M2, InValid_M3)
     if(maxRawMat == InValid_M1){
         str += `<li>${R_RawMat1}</li>`;
      }
      else if(maxRawMat == InValid_M2){
          str += `<li>${R_RawMat2}</li>`; 
      }
      else if(maxRawMat == InValid_M3){
        str += `<li>${R_RawMat3}</li>`; 
    }

    let maxMachine = Math.max(Invalid_Mac2, Invalid_Mac8)
    if(maxMachine == Invalid_Mac2){
        str += `<li>${R_Mac2}</li>`;
    }
    else if(maxMachine == Invalid_Mac8){
        str += `<li>${R_Mac8}</li>`; 
    }

    let maxProductCode = Math.max(InValid_8130, InValid_8134, InValid_8136, InValid_8141, InValid_8205, InValid_8216, InValid_8207, InValid_8208)
     if(maxProductCode == InValid_8130){
         str += `<li>${R_8130}</li>`;
      }
      else if(maxRawMat == InValid_8134){
          str += `<li>${R_8134}</li>`; 
      }
      else if(maxRawMat == InValid_8136){
        str += `<li>${R_8136}</li>`; 
      }
      else if(maxRawMat == InValid_8141){
        str += `<li>${R_8141}</li>`; 
      }
      else if(maxRawMat == InValid_8205){
      str += `<li>${R_8205}</li>`; 
      }
      else if(maxRawMat == InValid_8216){
        str += `<li>${R_8216}</li>`; 
      }
      else if(maxRawMat == InValid_8207){
        str += `<li>${R_8207}</li>`; 
      }
      else if(maxRawMat == InValid_8208){
      str += `<li>${R_8208}</li>`; 
      }

    str += '</ul>'
    str += '</div>'

    document.getElementById("SR_container").innerHTML = str;
}
  