function checkCreds(){
    //input validationfor week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need 
    var fisrtName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
     //fill in the variables 
        //working on inputting first name
    fisrtName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + fisrtName);

        //working on inputting last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

        //working on inputting zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code was inputted as " + zipCode);

        //working on inputting full name
    fullName = fisrtName + " " + lastName;
    console.log("The full name was inputted as " + fullName);

       //working on inputting character length
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    //working on inputting zip coed character length
    zipCodeNumb = parseInt(zipCode);
    console.log(" The zip code number is " + zipCodeNumb);

    //things to check for... fullNameLength is less than 20 cahracters
    //zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name"; 
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code"; 
    } else {
        alert("User Credentials passed, welcome to site, " + fullName);
    }
}

function checkPalin(){
    console.log("checkPalin() started");
}