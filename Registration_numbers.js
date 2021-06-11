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
var existingReg = [];
// console.log(existingReg);
if (localStorage['regNumber']) {
  existingReg = JSON.parse(localStorage.getItem('regNumber'));
  // console.log(localStorage.getItem('regNumber'));
}
// console.log(existingReg);
window.addEventListener('load', (event) => {
  var zabalaza = existingReg
  if (existingReg) {
    for (var i = 0; i < zabalaza.length; i++) {
      // console.log(zabalaza);
      var pule = document.createElement('span');
      pule.innerHTML = zabalaza[i]
      listElem.appendChild(pule)
    }
  }
});
var settingInstance = Registration(existingReg);



//Do the Addbtn to display the textbox
AddBtnElem.addEventListener('click', function () {

  var regies = settingInstance.getReg()
  if (!regies.includes(regSet.value.toUpperCase())) {

    if (settingInstance.checkValidate(regSet.value)) {
      //  if(regSet.value && listElem.length > 0){
      // for(var i=0; i< regies.length; i++){
      let pule = document.createElement('span')
      if (regSet.value.length > 0) {
        pule.innerHTML = regSet.value;
        listElem.appendChild(pule);
      // }
    }
    settingInstance.theReg(regSet.value);
    localStorage.setItem('regNumber', JSON.stringify(settingInstance.getReg()));
      //console.log(Object.keys(settingInstance.getReg()))
   

      spaceElem.innerHTML = "Registration Added!!!"
      setTimeout(function () {
        spaceElem.innerHTML = "";
      }, 3000);
    } else {
      emptyElem.innerHTML = "Please enter valid registration number!"
      setTimeout(function () {
        emptyElem.innerHTML = "";
      }, 3000)
    }
  }
  else if(regies.includes(regSet.value)){
    emptyElem.innerHTML = "The registration already exist!!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 3000)
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
    // console.log();

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
  regRadioBtn.checked = false;
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
      console.log(zabalaza[i])
    }
  }
  else if (regies.length === 0) {
    emptyElem.innerHTML = "The localstorage is empty!!!"
    setTimeout(function () {
      emptyElem.innerHTML = "";
    }, 3000)
  }
});

resetBtnElem.addEventListener('click', function () {
  location.reload()
  window.localStorage.removeItem('regNumber')
  emptyElem.innerHTML = "localStorage cleared!!"
  setTimeout(function () {
    emptyElem.innerHTML = "";
  }, 3000)
  // localStorage.clear();

});

/***********************************************************************Template*************************************************/

//get a reference to the enter registration no.
var regSets = document.querySelector(".RegistrationSettings")
//get a reference for the error display
var emptiesElem = document.querySelector(".empties")
//get a reference for the Add message display
var spacesElem = document.querySelector(".emptiesSpace")
//get a reference for the add buttton
var AddElem = document.querySelector(".AddBtn")
//get a reference for the radio buttons display
var regElem = document.querySelector(".Registration")
//get a reference for the show button
var showsElem = document.querySelector(".ShowButton")
//get a reference for the view all button
var viewAllElem = document.querySelector(".ViewAllButton")
//get a reference for the reset button
var resetsElem = document.querySelector(".ResetButton")
// get reference for the empty div for the appendchild
var listsElem = document.querySelector(".jojos")

//get the localStorage
var existingRegiez = [];

var regiezTemplateSource = document.querySelector(".userTemplate").innerHTML;
var regiezTemplate = Handlebars.compile(regiezTemplateSource);

if (localStorage['regList']) {
  existingRegiez = JSON.parse(localStorage.getItem('regList'));
 console.log(localStorage.getItem('regList'))
}

window.addEventListener('load', (event) => {

  var zabalazani = existingRegiez
  if (existingRegiez) {
    for (var i = 0; i < zabalazani.length; i++) {
      var pules = document.createElement('span');
      pules.innerHTML = zabalazani[i]
      listsElem.appendChild(pules)
    }
  }
});
var settingsInstance = Registrations(existingRegiez);



//Do the Addbtn to display the textbox
AddElem.addEventListener('click', function () {

  var regiez = settingsInstance.getRegie()
  if (!regiez.includes(regSets.value.toUpperCase())) {

    if (settingsInstance.checkValidates(regSets.value)) {


      let pules = document.createElement('span')
      if (regSets.value.length > 0) {
        pules.innerHTML = regSets.value
        listsElem.appendChild(pules);
      }

      settingsInstance.theRegie(regSets.value);
      localStorage.setItem('regList', JSON.stringify(settingsInstance.getRegie()));

      spacesElem.innerHTML = "Registration Added!!!"
      setTimeout(function () {
        spacesElem.innerHTML = "";
      }, 3000);
    } else {
      emptiesElem.innerHTML = "Please enter valid registration number!"
      setTimeout(function () {
        emptiesElem.innerHTML = "";
      }, 3000)
    }
  }

  else if(regiez.includes(regSets.value)){
    emptiesElem.innerHTML = "The registration already exist!!"
    setTimeout(function () {
      emptiesElem.innerHTML = "";
    }, 3000)
  }
  regSets.value = "";
});


showsElem.addEventListener('click', function () {

  var regiezRadioBtn = document.querySelector("input[name='city']:checked");

  if (regiezRadioBtn) {

    if (localStorage['regList']) {
      existingRegiez = JSON.parse(localStorage.getItem('regList'));
    }
    while (listsElem.hasChildNodes()) {
      listsElem.removeChild(listsElem.firstChild);
    }
    var suzani = existingRegiez.filter(regi => regi.startsWith(regiezRadioBtn.value));
    if (regiezRadioBtn.value && suzani.length > 0) {
       for (var i = 0; i < suzani.length; i++) {

      // var suzaa = suzani;
        // console.log(suzaa)
        pules = document.createElement('span');
        pules.innerHTML = suzani[i];
        pules.innerHTML = regiezTemplate({regH:suzani})
        // console.log(regiezTemplate)
        // listsElem.appendChild(pules);
      listsElem.innerHTML = regiezTemplate({ regH: suzani })
      }
    } else {
      emptiesElem.innerHTML = "There is no matching registration number of that town at the current moment!"
      setTimeout(function () {
        emptiesElem.innerHTML = "";
      }, 3000)
    }

  } else if (!regiezRadioBtn) {
    emptiesElem.innerHTML = "Please select the Town!"
    setTimeout(function () {
      emptiesElem.innerHTML = "";
    }, 3000)
  }
  regiezRadioBtn.checked = false;

});



viewAllElem.addEventListener('click', function () {
  var regiez = settingsInstance.getRegie()

  while (listsElem.hasChildNodes()) {
    listsElem.removeChild(listsElem.firstChild);
  }
  var zabalazani = existingRegiez
  if (existingRegiez) {
    for (var i = 0; i < zabalazani.length; i++) {
      var pules = document.createElement('span');
      pules.innerHTML = zabalazani[i]
      listsElem.appendChild(pules)
    }
  }
  else if (regiez.length === 0) {
    emptiesElem.innerHTML = "The localstorage is empty!!!"
    setTimeout(function () {
      emptiesElem.innerHTML = "";
    }, 3000)
  }
});

resetsElem.addEventListener('click', function () {
  location.reload()
  window.localStorage.removeItem('regList')
    emptiesElem.innerHTML = "localStorage cleared!!"
    setTimeout(function () {
      emptiesElem.innerHTML = "";
    }, 3000)

  // localStorage.clear();

});

