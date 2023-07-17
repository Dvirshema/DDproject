$(document).ready(function(){
  
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
   
     let apiMat = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Material';
     ajaxCall('GET',apiMat,'',GetMat,Err);   

     let apiMac = 'https://proj.ruppin.ac.il/cgroup42/prod/api/Machine';
     ajaxCall('GET',apiMac,'',GetMac,Err);   

     let apiPR = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipe';
     ajaxCall('GET',apiPR,'',GetPR,Err);  
   
     $('#AddMachineForm_container').submit(function(event){

        // Prevent the form from submitting normally
        event.preventDefault();

        //== document.getElementById('XX')value;
        let machineNum=$('#machineNumIN').val();
        let machineDesc=$('#machineDescIN').val();
    
        let machine={};
        
        machine.machineNum=machineNum;
        machine.machineDesc=machineDesc;

        //swagger
        let api='https://proj.ruppin.ac.il/cgroup42/prod/api/Machine'
        ajaxCall('POST',api,JSON.stringify(machine),SucAddMachine,Err);
     
        return false;
      })

      $("#UpdateMachineForm_container").submit(function () {
        let machineNum = $("#machineNumUP").val();
        let machineDesc = $("#machineDescUP").val();
        let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Machine/UpdateMachine?machineNum=${machineNum}&machineDesc=${machineDesc}`;
        ajaxCall("PUT", apiPUT, "", SucUpdateMachine, Err);
        return false;
      });

      $('#AddMaterialForm_container').submit(function(event){

        // Prevent the form from submitting normally
        event.preventDefault();

        //== document.getElementById('XX')value;
        let materialNum=$('#materialNumIN').val();
        let materialName=$('#materialNameIN').val();
        let amount=$('#materialAmountIN').val();
        let materialDescription=$('#materialDescIN').val();
    
        let material={};
        
        material.materialNum=materialNum;
        material.materialName=materialName;
        material.amount=amount;
        material.materialDescription=materialDescription;

        //swagger
        let api='https://proj.ruppin.ac.il/cgroup42/prod/api/Material'
        ajaxCall('POST',api,JSON.stringify(material),SucAddMaterial,Err);
     
        return false;
      })

      $("#UpdateMaterialForm_container").submit(function () {
        let materialNum = $("#materialNumUP").val();
        let materialName = $("#materialNameUP").val();
        let materialDescription = $("#materialDescUP").val();
        let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Material/UpdateAllMaterial?matNum=${materialNum}&matName=${materialName}&matDesc=${materialDescription}`;
        ajaxCall("PUT", apiPUT, "", SucUpdateMaterial, Err);
        return false;
      });

      $('#AddProductRecipeForm_container').submit(function(event){

        // Prevent the form from submitting normally
        event.preventDefault();

        //== document.getElementById('XX')value;
        let machineNum=$('#PRmachineNumIN').val();
        let productCode=$('#productCodeIN').val();
        let productName=$('#productNameIN').val();
        let prodRecipeNum=$('#recipeNumIN').val();
        let rawMatNum=$('#rawMatNumIN').val();
        let amountRequired=$('#amountRequiredIN').val();
    
        let PR={};
        
        PR.machineNum=parseInt(machineNum);
        PR.productCode=productCode;
        PR.productName=productName;
        PR.prodRecipeNum=prodRecipeNum;
        PR.rawMatNum=parseInt(rawMatNum);
        PR.amountRequired=amountRequired;

        //swagger
        let api='https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm'
        ajaxCall('POST',api,JSON.stringify(PR),SucAddProductRecipe,Err);
     
        return false;
      })

      $("#UpdateProductRecipeForm_container").submit(function () {
        let machineNum = $("#PRmachineNumUP").val();
        let productCode = $("#productCodeUP").val();
        let prodRecipeNum = $("#recipeNumUP").val();
        let rawMatNum = $("#rawMatNumUP").val();
        let amountRequired = $("#amountRequiredUP").val();
        let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm/UpdateMatiral?machineNum=${machineNum}&productCode=${productCode}&prodRecipeNum=${prodRecipeNum}&rawMatNum=${rawMatNum}&amountRequired=${amountRequired}`;
        ajaxCall("PUT", apiPUT, "", SucUpdateProductRecipe, Err);
        return false;
      });

})

let rawMatCounter = 0;

function addRawMaterial() {
  if (rawMatCounter < 2) {
    rawMatCounter++;

    const rawMatContainer = document.getElementById("rawMat-container");

    const newDiv = document.createElement("div");
    newDiv.classList.add("rawMat-from");
    newDiv.id = "rawMat-from-" + rawMatCounter;

   const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.id = "amountRequiredIN-" + rawMatCounter;
    newInput.name = "amountRequiredIN-" + rawMatCounter;
    newInput.classList.add("amountRequiredIN");
    newInput.required = true;

    newDiv.appendChild(newInput);

    const newSelect = document.createElement("select");
    newSelect.id = "rawMatNumIN-" + rawMatCounter;
    newSelect.name = "rawMatNumIN-" + rawMatCounter;
    newSelect.required = true;

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.innerHTML = "עיתון";
    newSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.innerHTML = "מקרגלים";
    newSelect.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "3";
    option3.innerHTML = "OCC";
    newSelect.appendChild(option3);

    newDiv.appendChild(newSelect);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.classList.add("closeButton");
    closeButton.onclick = function() {
      rawMatContainer.removeChild(newDiv);
      rawMatCounter--;
    };

    newDiv.appendChild(closeButton);

    rawMatContainer.appendChild(newDiv);
  }
}

function addRawMaterialUP() {
  if (rawMatCounter < 2) {
    rawMatCounter++;

    const rawMatContainer = document.getElementById("rawMat-container-UP");

    const newDiv = document.createElement("div");
    newDiv.classList.add("rawMat-from-UP");
    newDiv.id = "rawMat-from-UP" + rawMatCounter;

   const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.id = "amountRequiredUP-" + rawMatCounter;
    newInput.name = "amountRequiredUP-" + rawMatCounter;
    newInput.classList.add("amountRequiredUP");
    newInput.required = true;

    newDiv.appendChild(newInput);

    const newSelect = document.createElement("select");
    newSelect.id = "rawMatNumUP-" + rawMatCounter;
    newSelect.name = "rawMatNumUP-" + rawMatCounter;
    newSelect.required = true;

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.innerHTML = "עיתון";
    newSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.innerHTML = "מקרגלים";
    newSelect.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "3";
    option3.innerHTML = "OCC";
    newSelect.appendChild(option3);

    newDiv.appendChild(newSelect);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.classList.add("closeButton");
    closeButton.onclick = function() {
      rawMatContainer.removeChild(newDiv);
      rawMatCounter--;
    };

    newDiv.appendChild(closeButton);

    rawMatContainer.appendChild(newDiv);
  }
}

function SucAddMachine(suc) {
    alert("הוספת מכונת ייצור עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');   
 }

 function SucUpdateMachine(suc) {
    alert("עדכון מכונת הייצור עבר בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');   
 }

 function SucAddMaterial(suc) {
    alert("הוספת חומר גלם עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');   
 }

 function SucUpdateMaterial(suc) {
    alert("עדכון חומר הגלם עבר בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');   
 }

 function SucAddProductRecipe(suc) {
  let secMaterial = document.getElementById("rawMat-from-1");

  if(secMaterial != null){
    addSecundMaterial();
  }
  else{
    alert("הוספת מתכון ייצור עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');  
  }   
}

function SucUpdateProductRecipe(suc) {
  let secMaterial = document.getElementById("rawMat-from-UP1");

  if(secMaterial != null){
    addSecundMaterialUP();
  }
  else{
    alert("עדכון מתכון ייצור עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');  
  }   
}

function addSecundMaterialUP(){

  let machineNum=$('#PRmachineNumUP').val();
  let productCode=$('#productCodeUP').val();
  let productName=$('#productNameUP').val();
  let prodRecipeNum=$('#recipeNumUP').val();
  let rawMatNum=$('#rawMatNumUP-1').val();
  let amountRequired=$('#amountRequiredUP-1').val();

  let PR={};
  
  PR.machineNum=parseInt(machineNum);
  PR.productCode=productCode;
  PR.productName=productName;
  PR.prodRecipeNum=prodRecipeNum;
  PR.rawMatNum=parseInt(rawMatNum);
  PR.amountRequired=amountRequired;

  //swagger
  let api='https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm'
  ajaxCall('POST',api,JSON.stringify(PR),SucAddSecundMaterialUP,Err);
}

function addSecundMaterial(){

  let machineNum=$('#PRmachineNumIN').val();
  let productCode=$('#productCodeIN').val();
  let productName=$('#productNameIN').val();
  let prodRecipeNum=$('#recipeNumIN').val();
  let rawMatNum=$('#rawMatNumIN-1').val();
  let amountRequired=$('#amountRequiredIN-1').val();

  let PR={};
  
  PR.machineNum=parseInt(machineNum);
  PR.productCode=productCode;
  PR.productName=productName;
  PR.prodRecipeNum=prodRecipeNum;
  PR.rawMatNum=parseInt(rawMatNum);
  PR.amountRequired=amountRequired;

  //swagger
  let api='https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm'
  ajaxCall('POST',api,JSON.stringify(PR),SucAddSecundMaterial,Err);
}

function SucAddSecundMaterial(){
  let ThirdMaterial = document.getElementById("rawMat-from-2");
  if(ThirdMaterial != null){
    addThirdMaterial();
  }
  else{
    alert("הוספת מתכון ייצור עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');  
  }   
}

function SucAddSecundMaterialUP(){
  let ThirdMaterial = document.getElementById("rawMat-from-UP2");
  if(ThirdMaterial != null){
    addThirdMaterialUP();
  }
  else{
    alert("הוספת מתכון ייצור עברה בהצלחה");
    location.assign('../HTML/RecipesAndProductsAdmin.html');  
  }   
}

function addThirdMaterial(){

  let machineNum=$('#PRmachineNumIN').val();
  let productCode=$('#productCodeIN').val();
  let productName=$('#productNameIN').val();
  let prodRecipeNum=$('#recipeNumIN').val();
  let rawMatNum=$('#rawMatNumIN-2').val();
  let amountRequired=$('#amountRequiredIN-2').val();

  let PR={};
  
  PR.machineNum=parseInt(machineNum);
  PR.productCode=productCode;
  PR.productName=productName;
  PR.prodRecipeNum=prodRecipeNum;
  PR.rawMatNum=parseInt(rawMatNum);
  PR.amountRequired=amountRequired;

  //swagger
  let api='https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm'
  ajaxCall('POST',api,JSON.stringify(PR),SucAddThirdMaterial,Err);
}

function addThirdMaterialUP(){

  let machineNum=$('#PRmachineNumUP').val();
  let productCode=$('#productCodeUP').val();
  let productName=$('#productNameUP').val();
  let prodRecipeNum=$('#recipeNumUP').val();
  let rawMatNum=$('#rawMatNumUP-2').val();
  let amountRequired=$('#amountRequiredUP-2').val();

  let PR={};
  
  PR.machineNum=parseInt(machineNum);
  PR.productCode=productCode;
  PR.productName=productName;
  PR.prodRecipeNum=prodRecipeNum;
  PR.rawMatNum=parseInt(rawMatNum);
  PR.amountRequired=amountRequired;

  //swagger
  let api='https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm'
  ajaxCall('POST',api,JSON.stringify(PR),SucAddThirdMaterialUP,Err);
}

function SucAddThirdMaterial(suc) {
  alert("הוספת מתכון ייצור עברה בהצלחה");
  location.assign('../HTML/RecipesAndProductsAdmin.html');   
}

function SucAddThirdMaterialUP(suc) {
  alert("הוספת מתכון ייצור עברה בהצלחה");
  location.assign('../HTML/RecipesAndProductsAdmin.html');   
}

 function Err(err) {
    alert("תקלה, בבקשה נסה שוב")
    console.log(err)
   
 }
   
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
    str += '<td><button id="add-material" onclick="PopupAddNewMaterial()">הוסף חומר גלם</button>תיאור חומר גלם</td>';
    str += '<td colspan="2">שם</td>';
    str += '</tr>';
  
    MatArr.forEach((Mat) => {
      str += '<tr>';
      str += `<td id="${Mat.materialNum}-matDesc">${Mat.materialDescription}</td>`;
      str += `<td id="${Mat.materialNum}-matName">${Mat.materialName}</td>`;
      str += `<td><button class="update-material" onclick="PopupUpdateMaterial(${Mat.materialNum})"><i class="fa fa-edit"></i></button></td>`;
      str += '</tr>';
    });
    str += '</table>';
    document.getElementById("right-top").innerHTML = str;
  }

  function RanderMachines(MacArr) {
    let str = '<table id="MacTable">';
    str += '<tr id="trHeader">';
    str += '<td><button id="add-machine" onclick="PopupAddNewMachine()">הוסף מכונת ייצור</button>תיאור פעילות המכונה</td>';
    str += '<td colspan="2">מספר מכונה</td>';
    str += '</tr>';
  
    MacArr.forEach((Mac) => {
      str += '<tr>';
      str += `<td>${Mac.machineDesc}</td>`;
      str += `<td>${Mac.machineNum}</td>`;
      str += `<td><button class="update-machine" onclick="PopupUpdateMachine(${Mac.machineNum})"><i class="fa fa-edit"></i></button></td>`;
      str += '</tr>';
    });
    str += '</table>';
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
    str += '<td colspan="2">מספר מכונה</td>';
    str += '</tr>';

    let counter = 1; // Counter variable
  
    PRArr.forEach((PR) => {
      str += '<tr>';
      str += `<td>${PR.rawMat3}</td>`;
      str += `<td>${PR.rawMat2}</td>`;
      str += `<td>${PR.rawMat1}</td>`;
      str += `<td id="productName${counter}">${PR.productName}</td>`;
      str += `<td id="productCode${counter}">${PR.productCode}</td>`;
      str += `<td id="machineNum${counter}">${PR.machineNum}</td>`;
      str += `<td><button class="update-ProductRecipe" onclick="PopupUpdateProductRecipe(${counter})"><i class="fa fa-edit"></i></button></td>`;
      str += '</tr>';

      counter++; // Increment the counter
    });
    str += "</table>";
    document.getElementById("left-bottom").innerHTML = str;
  }

  function PopupAddNewMachine(){
    $("#popUp-AddMachine").fadeIn(1000);
  }

 function PopupUpdateMachine(machineNum){
    $("#popUp-UpdateMachine").fadeIn(1000);
    document.getElementById("machineNumUP").value = machineNum;
    document.getElementById("machineNumUP").disabled = true;
  }

  function PopupAddNewMaterial(){
    $("#popUp-AddMaterial").fadeIn(1000);
  }
 
  function PopupUpdateMaterial(materialNum){
    $("#popUp-UpdateMaterial").fadeIn(1000);
    document.getElementById("materialNumUP").value = materialNum;
    document.getElementById("materialNumUP").disabled = true;
    document.getElementById("materialNameUP").value = document.getElementById(materialNum+"-matName").innerHTML;
    document.getElementById("materialDescUP").value = document.getElementById(materialNum+"-matDesc").innerHTML;
  }

  function PopupAddNewProductRecipe(){
    $("#popUp-AddProductRecipe").fadeIn(1000);
  }

  function PopupUpdateProductRecipe(counter){
    $("#popUp-UpdateProductRecipe").fadeIn(1000);
    document.getElementById("PRmachineNumUP").value = document.getElementById("machineNum"+counter).innerHTML;
    document.getElementById("PRmachineNumUP").disabled = true;
    document.getElementById("productCodeUP").value = document.getElementById("productCode"+counter).innerHTML;
    document.getElementById("productCodeUP").disabled = true;
    document.getElementById("productNameUP").value = document.getElementById("productName"+counter).innerHTML;
    document.getElementById("productNameUP").disabled = true;

    let apiPRF = 'https://proj.ruppin.ac.il/cgroup42/prod/api/ProductRecipeForm';
    ajaxCall('GET',apiPRF,'',GetPRF,Err);  
  }

  function CloseModal() {
    $("#popUp-AddMachine").fadeOut(500);
    $("#popUp-UpdateMachine").fadeOut(500);
    $("#popUp-AddMaterial").fadeOut(500);
    $("#popUp-UpdateMaterial").fadeOut(500);
    $("#popUp-AddProductRecipe").fadeOut(500);
    $("#popUp-UpdateProductRecipe").fadeOut(500);
  }

  function GetPRF(ArrPRF){
    
    let machineNum = document.getElementById("PRmachineNumUP").value;
    let productCode = document.getElementById("productCodeUP").value;

    ArrPRF.forEach((PRF) => {
      
      if(PRF.machineNum == machineNum && PRF.productCode == productCode){
        document.getElementById("recipeNumUP").value = PRF.prodRecipeNum;
        document.getElementById("recipeNumUP").disabled = true;
      }
    });

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

