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

console.log(existingReg);
window.addEventListener('load', (event) => {
  existingReg
  for (var i = 0; i < existingReg.length; i++) {

    // zabalaza = existingReg.key(i)
    // console.log(zabalaza);
    var pule = document.createElement('span');
    console.log(existingReg[i]);
    pule.innerHTML = existingReg[i]
    listElem.appendChild(pule)
  }

 
});
}
var settingInstance = Registration(existingReg);

//Do the Addbtn to display the textbox
AddBtnElem.addEventListener('click', function () {
  

  if (settingInstance.checkValidate(regSet.value)) {
    // if (regSet.value.length > 0) {
      settingInstance.theReg(regSet.value);

      var regies = settingInstance.getReg()
     
      // regSet = regSet.toUpperCase();
      for (var i = 0; i < regies.length; i++) {
        
       
        if (regies[i] === regSet.value) {
          console.log("DFDFDFDFDFF")

          
        }
        else{
          let pule = document.createElement('span')
  
          pule.innerHTML = regies[i]
          listElem.appendChild(pule);
          console.log('sfsfsfsdfs')
        }
      }
    // }

    //console.log(Object.keys(settingInstance.getReg()))
    localStorage.setItem('regNumber', JSON.stringify(settingInstance.getReg()));

    emptyElem.innerHTML = "Registration Added!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 3000);
  } else {
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
    }

    var suza = existingReg.filter(reg => reg.startsWith(regRadioBtn.value));

    if (regRadioBtn.value && suza.length > 0) {
      for (var i = 0; i < suza.length; i++) {

        while (listElem.hasChildNodes()) {
          listElem.removeChild(listElem.firstChild);
        }

        pule = document.createElement('span');
        pule.innerHTML = suza[i]
        listElem.appendChild(pule);
      }
    } else {
      console.log(suza);
      //alert()
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

  while (listElem.hasChildNodes()) {
    listElem.removeChild(listElem.firstChild);
  }
  var zabalaza = existingReg
  if (existingReg) {
    for (var i = 0; i < zabalaza.length; i++) {

      // zabalaza = existingReg.key(i)
      console.log(zabalaza);
      var pule = document.createElement('span');
      console.log(zabalaza[i]);
      pule.innerHTML = zabalaza[i]
      listElem.appendChild(pule)
    }
  } else {
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