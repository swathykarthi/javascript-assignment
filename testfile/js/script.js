function verfun() {
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var num = document.querySelector("#num").value;
    var mail = document.querySelector("#mail").value;
    var pswd = document.querySelector("#pswd").value;
    var male = document.querySelector("#male").checked;
    var female = document.querySelector("#female").checked;
    var city = document.querySelector("#city").value;
    var terms = document.querySelector("#terms").checked;
    if (fname == null || fname == "") {
        document.querySelector("#errorbox").innerHTML = "Enter first name";
    }
    else if (lname == null || lname == "") {
        document.querySelector("#errorbox").innerHTML = "Enter last name";
    }
    else if (num == null || num == "") {
        document.querySelector("#errorbox").innerHTML = "Enter Mobile number";
    }
    else if (mail == null || mail == "") {
        document.querySelector("#errorbox").innerHTML = "Enter Mail ID";
    }
    else if (pswd == null || pswd == "") {
        document.querySelector("#errorbox").innerHTML = "Create your Password";
    }
    else if (male == false && female == false) {
        document.querySelector("#errorbox").innerHTML = "select gender";
    }
    else if (city == null || city == "") {
        document.querySelector("#errorbox").innerHTML = "Select your city";
    }
    else if (terms == false) {
        document.querySelector("#errorbox").innerHTML = "Kindly agree the terms and condition";
    }
    // if (fname == "" && lname == "" && num == "" && mail == "" && pswd == "" && male == false && female == false && city == "" && terms == false) {
    //     document.querySelector("#errorbox").innerHTML = "Fill the form";
    // }
    else {
        document.querySelector("#errorbox").innerHTML = "Registered Successfully";
    }
}