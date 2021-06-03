//get a reference to the enter registration no.
var regSet = document.querySelector(".RegistrationWithSettings")
//get a reference for the error display
var emptyElem = document.querySelector(".empty")
//get a reference for the Add message display
var spaceElem = document.querySelector(".emptySpace")
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
// console.log(existingReg);
window.addEventListener('load', (event) => {
  existingReg
  for (var i = 0; i < existingReg.length; i++) {

    // zabalaza = existingReg.key(i)
    // console.log(zabalaza);
    var pule = document.createElement('span');
    // console.log(existingReg[i]);
    pule.innerHTML = existingReg[i]
    listElem.appendChild(pule)
  }

});
var settingInstance = Registration(existingReg);

//Do the Addbtn to display the textbox
AddBtnElem.addEventListener('click', function () {

  var regies = settingInstance.getReg()
  if (!regies.includes(regSet.value.toUpperCase())) {

    if (settingInstance.checkValidate(regSet.value)) {
      

      let pule = document.createElement('span')
      if (regSet.value.length > 0) {
        pule.innerHTML = regSet.value
        listElem.appendChild(pule);
      }
      //console.log(Object.keys(settingInstance.getReg()))
      settingInstance.theReg(regSet.value);
      localStorage.setItem('regNumber', JSON.stringify(settingInstance.getReg()));

      spaceElem.innerHTML = "Registration Added!!!"
      setTimeout(function () {
        spaceElem.innerHTML = "";
      }, 3000);
    } else {
      emptyElem.innerHTML = "Please enter valid registration number!"
      setTimeout(function () {
        emptyElem.innerHTML = "";
      }, 4000)
    }
  }
  regSet.value = "";
});


showBtnElem.addEventListener('click', function () {

  var regRadioBtn = document.querySelector("input[name='city']:checked");

  if (regRadioBtn) {
    //settingInstance.numberPlate,(regSet.value);
    if (localStorage['regNumber']) {
      existingReg = JSON.parse(localStorage.getItem('regNumber'));
    }
    while (listElem.hasChildNodes()) {
      listElem.removeChild(listElem.firstChild);
    }
    var suza = existingReg.filter(reg => reg.startsWith(regRadioBtn.value));
    if (regRadioBtn.value && suza.length > 0) {
       for (var i = 0; i < suza.length; i++) {

     
console.log(suza[i])
        pule = document.createElement('span');
        pule.innerHTML = suza[i]
        listElem.appendChild(pule);
      }
    } else {
      // console.log(suza);
      emptyElem.innerHTML = "There is no matching registration number of that town at the current moment!"
      setTimeout(function () {
        emptyElem.innerHTML = "";
      }, 4000)
    }

  } else if (!regRadioBtn) {
    // alert(!regRadioBtn)
    emptyElem.innerHTML = "Please select the Town!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 4000)
  }
});



viewBtnElem.addEventListener('click', function () {
  var regies = settingInstance.getReg()
  while (listElem.hasChildNodes()) {
    listElem.removeChild(listElem.firstChild);
  }
  var zabalaza = existingReg
  if (existingReg) {
    for (var i = 0; i < zabalaza.length; i++) {
      // console.log(zabalaza);
      var pule = document.createElement('span');
      pule.innerHTML = zabalaza[i]
      listElem.appendChild(pule)
    }
    }
    else if(regies.length === 0){
      emptyElem.innerHTML = "The localstorage is empty!!!"
          setTimeout(function () {
            emptyElem.innerHTML = "";
          }, 4000)
  }
});

resetBtnElem.addEventListener('click', function () {
  location.reload()
  localStorage.clear();

});