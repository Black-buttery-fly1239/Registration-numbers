//get a reference to the enter registration no.
var regSet = document.querySelector(".RegistrationWithSettings")
//get a reference for the error display
var emptyElem = document.querySelector(".empty")
//get a reference for the add buttton
var AddBtnElem = document.querySelector(".Addbutton")
//get a reference for the radio buttons display
var registrationElem = document.querySelector(".registration")
//get a reference for the show button
var showBtnElem = document.querySelector(".ShowBtn")
//get a reference for the view all button
var viewBtnElem = document.querySelector(".ViewAllBtn")
//get a reference for the reset button
var resetBtnElem = document.querySelector(".ResetBtn")
// get reference for the empty div for the appendchild
var listElem = document.querySelector(".jojo")

//get the localStorage
var existingReg;
// console.log(existingReg);
if (localStorage['regNumber']) {
  existingReg = JSON.parse(localStorage.getItem('regNumber'));
  // console.log(existingReg);
}
var settingInstance = Registration(existingReg);

//Do the Addbtn to display the textbox
AddBtnElem.addEventListener('click', function () {


  if (settingInstance.checkValidate(regSet.value)) {

    let pule = document.createElement('span')
    pule.innerHTML = regSet.value
    listElem.appendChild(pule);
    //console.log(Object.keys(settingInstance.getReg()))
    settingInstance.theReg(regSet.value)
    localStorage.setItem('regNumber', JSON.stringify(settingInstance.getReg()))
  }

  else {
    emptyElem.innerHTML = "Please enter valid registration number!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 4000)
  }
  regSet.value = "";
});


showBtnElem.addEventListener('click', function () {

  var regRadioBtn = document.querySelector("input[name='city']:checked");

  if (regRadioBtn) {
    //settingInstance.numberPlate,(regSet.value);
    if (localStorage['regNumber']) {
      existingReg = JSON.parse(localStorage.getItem('regNumber'));

    var suza = existingReg.filter(reg => reg.startsWith(regRadioBtn.value));
    for(var i=0; i< suza.length;i++){

    while(listElem.hasChildNodes()){
      listElem.removeChild(listElem.firstChild);
    }

    pule = document.createElement('span');
    pule.innerHTML = suza[i]
    listElem.appendChild(pule);
   
    }
    }
 
  }

  // loop local storage

  if(!regRadioBtn){
    emptyElem.innerHTML = "Please select the Town!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 4000)

 
  }
  // else(regRadioBtn == null){
  //   // alert(regRadioBtn == null)
  //  emptyElem.innerHTML = "There is no matching registration number of that town at the current moment!"
  // }
});

viewBtnElem.addEventListener('click', function () {

    var zabalaza = existingReg
    for(i=0; i < zabalaza.length; i++)

    while(listElem.hasChildNodes()){
      listElem.removeChild(listElem.firstChild);
    }
    // zabalaza = existingReg.key(i)
    console.log(zabalaza);
    pule = document.createElement('span');
    console.log(zabalaza[i]);
    pule.innerHTML = zabalaza
    listElem.appendChild(pule)

});

resetBtnElem.addEventListener('click', function () {
  location.reload()
  localStorage.clear();

});