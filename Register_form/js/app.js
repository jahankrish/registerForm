function printMessage(id, value, isError) {
  const element = document.getElementById(id);
  element.innerHTML = value;

  if (isError) {
    element.classList.remove("success");
    element.classList.add("error");
  } else {
    element.classList.add("success");
    element.classList.remove("error");
  }

}

// Form Validation
function registerForm() {
  
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassWord();
  validateConfromPassWord();

  if (isFnameValid == true && isLnameValid == true && isEmailValid == true && isPassWordValid == true && isComfrom_PassWord == true) {
    registrationPost();
   }
}

// regex values in store in variable

let regName = /^[a-zA-Z]+$/;
let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;

  let isFnameValid = false;
  let isLnameValid = false;
  let isEmailValid = false;
  let isPassWordValid = false;
  let isComfrom_PassWord = false;

// validate_FirstName
function validateFirstName() {
   
    let firstName = document.getElementById("firstName").value;
    if (firstName.trim() == "") {
        printMessage(
        "firstNameMessage",
        "Please enter your firstName required",
        true
        );
        // firstName.focus();
    } else if (firstName.length > 10) {
        printMessage("firstNameMessage", "maximum 10 Character required", true);
    } else if (firstName.length < 4) {
        printMessage("firstNameMessage", "minimum 4 Character required", true);
    } else if (regName.test(firstName) === false) {
        printMessage(
        "firstNameMessage",
        "Please enter a valid character only required",
        true
        );
    } else {
        printMessage("firstNameMessage", "required success", false);
        isFnameValid = true;
    }
}

//validate_LastName
function validateLastName() {

    let lastName = document.getElementById("lastName").value;
    if (lastName.trim() == "") {
        printMessage(
        "lastNameMessage",
        "Please enter your lastName required",
        true
        );
    } else if (lastName.length > 8) {
        printMessage(
        "lastNameMessage",
        "maximum 10 Character required required",
        true
        );
    } else if (lastName.length < 2) {
        printMessage(
        "lastNameMessage",
        "minimum 2 Character required required",
        true
        );
    } else if (regName.test(lastName) === false) {
        printMessage("lastNameMessage", "Please enter a valid character only required", true);
    } else {
        printMessage("lastNameMessage", "required success", false);
        isLnameValid = true;
    }
}
//validate_Email
function validateEmail() {
 
    let email = document.getElementById("email").value;
    if (email == "") {
        printMessage("emailMessage", "Please enter a email required", true);
    } else if (regEmail.test(email) === false) {
        printMessage("emailMessage", "Please enter a valid email required", true);
    } else {
        printMessage("emailMessage", "required success", false);
        isEmailValid = true;
    }
}
//validate_PassWord
function validatePassWord() {
  
    let passWord = document.getElementById("passWord").value;
    if (passWord == "") {
        printMessage("passWordMessage", "Please  enter a password required", true);
    } else if (regPassword.test(passWord) === false) {
        printMessage(
        "passWordMessage",
        "Please  enter a valid password required",
        true
        );
    } else {
        printMessage("passWordMessage", "required success", false);
        isPassWordValid = true;
    }
}
//validate_ConformPassWord
function validateConfromPassWord() {

    let passWord = document.getElementById("passWord").value;
    let confirmPassWord = document.getElementById("confirmPassWord").value;
    if (confirmPassWord == "") {
        printMessage(
        "confirmPassWordMessage",
        "Please  enter a password required",
        true
        );
    } else if (passWord != confirmPassWord) {
        printMessage(
        "confirmPassWordMessage",
        "Password and Confirm_password is not match",
        true
        );
    } else {
        printMessage("confirmPassWordMessage", "required success", false);
        isComfrom_PassWord = true;
    }
}

function registrationPost() {

    $.post("./js/data.json", function(data) {
        console.log(data);
    })
}


