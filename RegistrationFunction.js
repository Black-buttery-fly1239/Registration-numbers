function Registration() {
    var regNo =  existingReg || [] 
   //console.log(existingReg);

    function theReg(reg) {
        reg = reg.toUpperCase()
        if (reg) {
            if (!regNo.includes(reg)) {
                //console.log(!regNo);
                regNo.push(reg)
            }
        }
    }
    
    function getReg() {
        return regNo 
    }
//ca 123333 ca 123-333 
    function checkValidate(regNumber) {
        // console.log(checkValidate);
        regNumber = regNumber.toUpperCase()
        var regNumberX = /(^[A-Z]{2}[\s][0-9]{3}[-\s][0-9]{2}$)|(^[A-Z]{2}[\s][0-9]{6}$)|(^[A-Z]{2}[\s][0-9]{3}[-\s][0-9]{3}$)/i ;
        var rexTest  = regNumberX.test(regNumber)
        if (regNumberX.test(regNumber)) {
            // theReg(regNumberX)
        }
       return rexTest;
       
    }

//     function plate(town){
//         var filteredReg = []
//         for(var i=0; i< town.length;i++){
//        if(town.startsWith("CK") || town.startsWith("CY") || town.startsWith("CA")){
//         filteredReg.push(town)
//        }
//    }
//    return filteredReg

//     }

    
    
    return {
        theReg,
        getReg,
        checkValidate,
        //plate,
        
    }
}