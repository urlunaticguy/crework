const optSignUp = document.querySelector("#go-for-signup");
const optLogin = document.querySelector("#go-for-login");
const optDiv = document.querySelector("#options-div");
const signup = document.querySelector("#signup");
const login = document.querySelector("#login");
const showPass = document.querySelector("#loginshow-pass");
const inputLoginMail = document.querySelector("#login-mail");
const inputFieldPass = document.querySelector("#loginpass");
const showPassSignUp = document.querySelector("#signupshow-pass");
const inputFieldPassSignUp = document.querySelector("#signuppass");
const showPassLabel = document.querySelector("#show-hide-pass-label");
const passStatusMsgSpan = document.querySelector("#pass-status-msg");
const submitButton = document.querySelector("#submit-button");
const loginButton = document.querySelector("#login-button");
const loginAlert = document.querySelector("#login-alert");
const bgColNo3 = document.querySelector(".bg-indianflagblue");
const colorChangers = document.querySelector(".col-1");
const loginForm = document.querySelector("#login-form");
const falseLoginBut = document.querySelector("#pseudo-login-button");
const falseSubmitBut = document.querySelector("#pseudo-signup-button");
const loginMailErrMsg = document.querySelector("#login-mail-error");
const signupMailErrMsg = document.querySelector("#signup-mail-error");
const inputEmailSignUp = document.querySelector("#email-signup");
const loginPassWarning = document.querySelector("#login-pass-warning");
const signupFirstNameInput = document.querySelector("#signup-first-name");
const signupLastNameInput = document.querySelector("#signup-last-name");
const termsCondiCheckbox = document.querySelector("#terms-conditions");
const homeSignUpButton = document.querySelector("#home-signup-button");
const homeLoginButton = document.querySelector("#home-login-button");

const color1 = [inputLoginMail, signupFirstNameInput, signupLastNameInput, homeSignUpButton];
const color2 = [inputEmailSignUp, inputFieldPassSignUp, inputFieldPass, homeLoginButton];
const color3bg = [loginAlert, falseSubmitBut, falseLoginBut];
const color3text = document.querySelectorAll(".t-cs3");
const color3border = document.querySelectorAll(".br-cs3")
const body = document.querySelector("#primary");

//primary colors
const colors = [['#00ADB5','#505762','#222831'], 
                ['#FF9933','#138808','#000080'], //indian flag combo
                ['#B83B5E','#6A2C70','#252A34'],
                ['#5800FF','#654b34','#252A34'],
                ['#2B7A0B','#ff8080','#2A0944'],
                ['#3120E0','#1ccaca','#293462'],
                ['#00b3b3','#b38f00','#2A0944'],
                ['#000000','#000000','#000000']]; 

//remove gradient goes here - update this in code
var currentGradientColor = ['from-[#FF9933]', 'to-[#138808]'];
//add gradient goes here - add new colors here
const gradientColors = [['from-[#00ADB5]', 'to-[#505762]'],
                        ['from-[#FF9933]', 'to-[#138808]'], //indian flag
                        ['from-[#B83B5E]', 'to-[#6A2C70]'],
                        ['from-[#5800FF]', 'to-[#654b34]'],
                        ['from-[#2B7A0B]', 'to-[#ff8080]'],
                        ['from-[#3120E0]', 'to-[#1ccaca]'],
                        ['from-[#00b3b3]', 'to-[#b38f00]'],
                        ['from-[#e6e6e6]', 'to-[#e6e6e6]']];

var d = 0, prevCol = -1;
var showPassCounter = 0;
var passwordString = "", errorMsg;
var arr = " abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=/?.>,<;:{}[]\|`~";

// saved email and passwords goes here
const savedLoginMail = ["sahil@crework.in","ishant@crework.in"];
const savedPassword = ["sahil","ishant"];

// change colors on click of icons
function changeCol(nn) {
    var n = 0;
    n = nn;
    while (nn > 2) {
        n = Math.floor((Math.random() * colors.length));
        if (n <= 2) {
            n = n + 3;
        }
        if (n != prevCol) {
            prevCol = n;
            break;
        }
        console.log(n);
    }
    for (i=0;i<color1.length;i++) {
        color1[i].style.backgroundColor = colors[n][0];
        color1[i].style.transition = "ease 300ms";
    }
    for (j=0;j<color2.length;j++) {
        color2[j].style.backgroundColor = colors[n][1];
        color2[j].style.transition = "ease 300ms";
    }
    for (k=0;k<color3bg.length;k++) {
        color3bg[k].style.backgroundColor = colors[n][2];
        color3bg[k].style.transition = "ease 300ms";
    }
    for (k=0;k<color3text.length;k++) {
        color3text[k].style.color = colors[n][2];
        color3text[k].style.transition = "ease 300ms";
    }
    for (l=0;l<color3border.length;l++) {
        color3border[l].style.borderColor = colors[n][2];
        color3border[l].style.transition = "ease 300ms";
    }
    //couldnt transition the background gradient
    body.classList.remove(currentGradientColor[0]);
    body.classList.remove(currentGradientColor[1]);
    body.classList.add(gradientColors[n][0]);
    body.classList.add(gradientColors[n][1]);
    currentGradientColor[0] = gradientColors[n][0];
    currentGradientColor[1] = gradientColors[n][1];
}

//capture click on false submit button and show alert
falseSubmitBut.addEventListener('click', () => {
    const inputMail = inputEmailSignUp.value;

    var param = checkEmail(inputMail);

    if (inputMail == "") {
        submitButton.click();
    } else if (param[0]) { //check if email format is correct
        signupMailErrMsg.innerHTML = "&nbsp;";
        if (errorMsg == "✅ No errors") { //check if password format is also right
            //check both name fields are filled
            if ((signupFirstNameInput.value != "") && (signupLastNameInput.value != "") && (termsCondiCheckbox.checked == true)) {
                loginAlert.innerHTML = "Account added ✅";
                loginAlert.classList.remove("hidden");
                setTimeout(function() {  
                    loginAlert.classList.add("hidden");
                },1800);
                setTimeout(function() {  
                    submitButton.click();
                },2500);
            } else {
                submitButton.click();
            }
        } else {
            submitButton.click();
        }
    }
    else {
        throwMessageEmail(param[1], param[2], param[3], param[4], 1);
    }
})

//capture click on false login button and show alert
falseLoginBut.addEventListener('click', () => {
    var inputMail = inputLoginMail.value;
    var inputPassword = inputFieldPass.value;
    //nothing entered and clicked login
    if ((inputMail == "") && (inputPassword == "")) {
        loginButton.click();
    } else if (checkEmail(inputMail)[0]) { //checking mail format
        //no password entered
        if (inputPassword == "") {
            loginButton.click();
        }
        //matching password
        else if (savedLoginMail.indexOf(inputMail) > -1) { 
            var index = savedLoginMail.indexOf(inputMail);
            if (savedPassword[index] == inputPassword) { //matching password
                loginAlert.innerHTML = "Login success ✅";
                loginAlert.classList.remove("hidden");
                inputLoginMail.value = ""; //clearing the input field mail
                inputFieldPass.value = ""; //clearing the input field pass
                setTimeout(function() {
                    loginAlert.classList.add("hidden");
                },2500);
                
                setTimeout(function() {  //this code delays
                    inputLoginMail.classList.add("text-opacity-0"); //hiding text
                    inputFieldPass.classList.add("text-opacity-0");
                    inputLoginMail.value = inputMail;
                    inputFieldPass.value = inputPassword;
                    loginButton.click(); //submitting the form with this
                },1500);
            } else {
                loginMailErrMsg.innerHTML = "&nbsp;";
                loginAlert.innerHTML = "❌ Wrong Password";
                loginAlert.classList.remove("hidden");
                setTimeout(function() {
                    loginAlert.classList.add("hidden");
                },2500);
            }
        }
        else {
            loginAlert.innerHTML = "❌ Email not registered";
            loginAlert.classList.remove("hidden");
            setTimeout(function() {
                loginAlert.classList.add("hidden");
            },2500);
        }
    } else {
        console.log("mail format incorrect");
        var param = checkEmail(inputMail);
        throwMessageEmail(param[1], param[2], param[3], param[4], 2);
    }
})

inputFieldPass.onkeydown = function(e) {
    loginPassWarning.innerHTML = "&nbsp";
}

inputLoginMail.onkeydown = function(e) {
    loginMailErrMsg.innerHTML = "&nbsp";
}



//hide the starting signup login and show what got clicked
function hide(d) {
    optSignUp.classList.add("hidden");
    optLogin.classList.add("hidden");
    if (d==1) { //signup entry
        signup.classList.remove("hidden");
    } else if (d==0) { //login entry
        login.classList.remove("hidden");
    }
}

//showing hiding password - login page part
showPass.addEventListener("click", () => { 
    if (showPassCounter == 0) {
        inputFieldPass.type = "text";
        showPassCounter++;
        showPass.classList.remove("fa-eye");
        showPass.classList.add("fa-eye-slash");
    } else {
        inputFieldPass.type = "password";
        showPassCounter--;
        showPass.classList.remove("fa-eye-slash");
        showPass.classList.add("fa-eye");
    }
})

//showing hiding password - signup page part
showPassSignUp.addEventListener("click", () => { 
    if (showPassCounter == 0) {
        inputFieldPassSignUp.type = "text";
        showPassCounter++;
        showPassSignUp.classList.remove("fa-eye");
        showPassSignUp.classList.add("fa-eye-slash");
    } else {
        inputFieldPassSignUp.type = "password";
        showPassCounter--;
        showPassSignUp.classList.remove("fa-eye-slash");
        showPassSignUp.classList.add("fa-eye");
    }
})

//function to check email syntax
function checkEmail(mail) {
    const re = /@[a-z]{1,}[.][a-z]{1,}/g;
    const re1 = /@/g;
    const re2 = /@[a-z]{1,}/g;
    const re3 = /@[a-z]{1,}[.]/g;
    const re4 = /@[a-z]{1,}[.][a-z]{1,}/g;

    const mailLower = mail.toLowerCase();

    const res1 = re1.test(mailLower);
    const res2 = re2.test(mailLower);
    const res3 = re3.test(mailLower);
    const res4 = re4.test(mailLower);

    let res = re.test(mail);
    console.log(res1, res2, res3, res4);
    return [res, res1, res2, res3, res4];
}

//throw error messages for invalid email syntax
function throwMessageEmail(a,b,c,d,n) {
    var errorMsgMail = "";
    if (!a) {
        errorMsgMail = "❌ Please include an @";
    } else if (!b) {
        errorMsgMail = "❌ Please enter mail name";
    } else if (!c) {
        errorMsgMail = "❌ Please include a dot.";
    } else if (!d) {
        errorMsgMail = "❌ Please enter .in .com";
    }
    if (n == 1) {
        signupMailErrMsg.innerHTML = errorMsgMail;
        signupMailErrMsg.classList.remove("hidden");
    } else if (n == 2) {
        loginMailErrMsg.innerHTML = errorMsgMail;
        loginMailErrMsg.classList.remove("hidden");
    }
}

// signup password keypress listener function
inputFieldPassSignUp.onkeydown = function(e){
    operateKeyPressOnPassword(e.key);
    if (passwordString.length > 2) {
        throwMessagePassword()
    }
};

//forms the string of password upon keypress
function operateKeyPressOnPassword(key) {
    if ((key == "Backspace")||(key == "Delete")) { //backspace or delete pressed
        if (passwordString.length > 0) {
            passwordString = passwordString.slice(0,(passwordString.length-1));
        }
    } else if (arr.indexOf(key.toLowerCase()) > -1) {
        passwordString += key;
    }
}

//checks if the password is correct in syntax
function throwMessagePassword() {
    const pe1 = /\s/g; //white-space chars
    const pe2 = /[a-z]/g; //a-z
    const pe3 = /\W/g; //one special char 
    const pe4 = /\d/g; //one digit
    const pe5 = /[A-Z]/g; //A-Z
    const num = passwordString;
    var len = num.length;
    errorMsg = "";
    var resultp1, resultp2, resultp3, resultp4, resultp5;

    if ((len >= 4) && (len <= 12)) {
        resultp1 = pe1.test(num); //non-space chars
        resultp2 = pe2.test(num); //one word char
        resultp3 = pe3.test(num); //one non-word
        resultp4 = pe4.test(num); //one digit
        resultp5 = pe5.test(num); //
        if (!resultp1) { //only non-space
            if ((resultp2)&&(resultp3)&&(resultp4)&&(resultp5)) {
                passStatus = true;
                errorMsg = "✅ No errors";
            } else if (!resultp4) { // no digits
                errorMsg = "❌ Please enter 0-9";
            } else if (!resultp2) { // no a-z
                errorMsg = "❌ Please enter a-z";
            } else if (!resultp3) { // no spl chars
                errorMsg = "❌ Please enter @#$!";
            } else if (!resultp5) {
                errorMsg = "❌ Please enter A-Z";
            }
        } else { //white-space detected
            errorMsg = "❌ no space allowed";
        }
    } else if (len < 4) {
        errorMsg = "❌ Password too short";
    } else if (len > 12) {
        errorMsg = "❌ Password too long";
    }
    passStatusMsgSpan.innerHTML = errorMsg;
    if (errorMsg != "✅ No errors") {
        falseSubmitBut.disabled = true;
        falseSubmitBut.classList.add("text-slate-500");
    } else {
        falseSubmitBut.disabled = false;
        falseSubmitBut.classList.remove("text-slate-500");
    }
}