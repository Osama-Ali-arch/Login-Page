var emailarray = [];
var passwordarray = [];
var size = 0 ;
let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let usernamevalid = false;
var count = 0;

function validateusername(){
    let user = document.getElementById("uname").value.trim();
    let warning = document.getElementById("userwarning");
    let name_pattern = /^[a-z A-Z\-]+$/;

    if(!user){
        warning.style.display = "block";
        warning.innerHTML = " * UserName is Required ";
        warning.style.color = "red";
        usernamevalid = false;
    }
    else if(!name_pattern.test(user)){
        warning.style.display = "block";
        warning.innerHTML = "Username Should inlcude only A-Z and a-z ";
        warning.style.color = "red";
        usernamevalid = false;
    }
    else{
        warning.style.display = "none";
        document.getElementById("uname").style.borderColor = "black";
        usernamevalid = true;
    }
    // toggleSubmitButton();

}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
    let warning = document.getElementById("warning");

    if (emailarray.includes(email)) {
        warning.style.display = "block";
        warning.innerHTML = "This email is already registered. Please use a different email.";
        warning.style.color = "red";
        emailValid = false;
    }
    else if (!email) {
        warning.style.display = "block";
        warning.innerHTML = "* Email is required";
        warning.style.color = "red";
        document.getElementById("email").style.borderColor = "red"; 
        emailValid = false;
    } 
    else if (!emailPattern.test(email)) {
        warning.style.display = "block";
        warning.innerHTML = "* Enter a valid email address";
        warning.style.color = "red";
        emailValid = false;
    } 
    else {
        warning.style.display = "none";
        document.getElementById("email").style.borderColor = "black";
        emailValid = true;
    }

    // toggleSubmitButton();
}

function validatePassword() {
    let password = document.getElementById("password").value.trim();
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let number = /[0-9]/g;
    let special = /[!@#$%^&*()-+=_{}|\;:"<>,./~]/g ;
    let warning = document.getElementById("warningp");

    document.getElementById("character").style.color = password.length >= 8 ? "green" : "red";
    document.getElementById("uppercase").style.color = password.match(upperCaseLetters) ? "green" : "red";
    document.getElementById("lowercase").style.color = password.match(lowerCaseLetters) ? "green" : "red";
    document.getElementById("digit").style.color = password.match(number) ? "green" : "red";
    document.getElementById("specialc").style.color = password.match(special) ? "green" : "red";

    if (!password) {
        warning.style.display = "block";
        warning.innerHTML = "* Password is required";
        warning.style.color = "red";
        document.getElementById("password").style.borderColor = "red"; 
        passwordValid = false;
    } 
    else if (password.length < 8 || !password.match(upperCaseLetters) || !password.match(lowerCaseLetters) || !password.match(number) || !password.match(special)) {
        warning.style.display = "block";
        warning.innerHTML = "* Please meet the password requirements";
        warning.style.color = "red";
        passwordValid = false;
    }
    else {
        warning.style.display = "none";
        document.getElementById("password").style.borderColor = "black";
        passwordValid = true;
    }

    // toggleSubmitButton();
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById("Confirm").value.trim();
    let password = document.getElementById("password").value.trim();
    // let newpassword = document.getElementById("newpassword").value.trim();
    let confirmWarning = document.getElementById("confirm-warning");
    document.getElementById("Passwordc").style.color = (password === confirmPassword ) ? "green" : "red";
    // document.getElementById("Passwordc").style.color = (password === confirmPassword) ? "green" : "red";
    if (!confirmPassword) {
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Confirm password is required";
        confirmWarning.style.color = "red";
        document.getElementById("Confirm").style.borderColor = "red"; 
        document.getElementById("Passwordc").style.color = "red";
        confirmPasswordValid = false;
    } 
    else if (password !== confirmPassword) {
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Password doesn't match";
        confirmWarning.style.color = "red";
        confirmPasswordValid = false;
    } 
    else {
        confirmWarning.style.display = "none";
        document.getElementById("Confirm").style.borderColor = "black";
        // document.getElementById("Confirm").style.borderColor = "black";
        confirmPasswordValid = true;
    }

    // toggleSubmitButton();
}

function toggleSubmitButton() {
    let createButton = document.getElementById("IdLogin");
    // document.getElementById("News").style.display = "none";
    // if (emailValid && passwordValid && confirmPasswordValid && usernamevalid) {
    //     createButton.disabled = false;
    //     document.getElementById("create").style.backgroundColor = "#25DAC5";
    // } 
    // else {
        createButton.disabled = true;
        document.getElementById("IdLogin").style.backgroundColor = "#EBEBE4";
        setTimeout(function(){
            createButton.disabled = false;
            document.getElementById("News").style.display = "none";
            document.getElementById("IdLogin").style.backgroundColor = "#25DAC5";
            proceed = true;
        } ,5000);

    // }
}

function create_account() {
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = document.getElementById("uname").value.trim();
    // const confirmPassword = document.getElementById("Confirm").value.trim();

    let warnings = false;

    if(!usernamevalid){
        // document.getElementById("userwarning").style.display = "block";
        document.getElementById("userwarning").innerHTML = "* Username is required";
        document.getElementById("userwarning").style.color = "red";
        document.getElementById("uname").style.borderColor = "red";
        warnings = true;
    }
    else{
        document.getElementById("uname").style.borderColor = "black";
        warnings = false;
    }
    // Email 
    if (!emailValid) {
        document.getElementById("warning").style.display = "block";
        document.getElementById("warning").innerHTML = "* Please enter a valid email.";
        document.getElementById("warning").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        warnings = true;
    }
    else if(emailarray.includes(email)){
        document.getElementById("warning").style.display = "block";
        document.getElementById("warning").innerHTML = "* Email already exists.";
        document.getElementById("warning").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        warnings = true;
    } 
    else {
        document.getElementById("email").style.borderColor = "black";
        warnings = false;
    }

    // Password 
    if (!passwordValid) {
        document.getElementById("warningp").style.display = "block";
        document.getElementById("warningp").innerHTML = "* Please enter a valid password.";
        document.getElementById("warningp").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        warnings = true;
    } 
    else {
        document.getElementById("password").style.borderColor = "black";
        warnings = false;
    }

    // Confirm password validation
    if (!confirmPasswordValid) {
        document.getElementById("confirm-warning").style.display = "block";
        document.getElementById("confirm-warning").innerHTML = "* Confirm Password is required.";
        document.getElementById("confirm-warning").style.color = "red";
        document.getElementById("Confirm").style.borderColor = "red";
        warnings = true;
    } 
    else {
        document.getElementById("Confirm").style.borderColor = "black";
        warnings = false;
    }
    // If there are warnings, stop execution
    if (warnings) {
        return false;
    }
    emailarray.push(email);
    passwordarray.push(password);
    console.log(emailarray , passwordarray);
    size++;

    // Show success message
    document.getElementById("News").style.display = "block";
    document.getElementById("News").innerHTML = "Account Created Successfully";
    document.getElementById("News").style.color = "green";
    document.getElementById("News").style.fontSize = "16px";
    document.getElementById("News").style.fontWeight = "bold";

    // Clear input fields after successful account creation
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("Confirm").value = "";
    document.getElementById("uname").value = "";

    // Reset validation flags and disable the submit button
    setTimeout(function(){
        emailValid = false;
        passwordValid = false;
        confirmPasswordValid = false;
        // toggleSubmitButton();
    },5000)
    alert("User Name : " + user +"\n"+"Email : " + email);
    // console.log("User Name : " + user +"\n"+"Email : " + email);
        
    document.getElementById("character").style.color = "red";
    document.getElementById("uppercase").style.color = "red";
    document.getElementById("lowercase").style.color = "red";
    document.getElementById("digit").style.color = "red";
    document.getElementById("Passwordc").style.color = "red";
    document.getElementById("specialc").style.color = "red";

} 

function vision(){
    let confirm = document.getElementById("Confirm");
    let visible = document.getElementById("visible");
    if(confirm.type === "password"){
        confirm.type = "text"
        visible.className = "fas fa-eye";
    } 
    else {
        confirm.type = "password";
        visible.className = "fas fa-eye-slash";
    }
}

function visible() {
    let vision = document.getElementById("visibility");
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        vision.className = "fas fa-eye";
    }
    else {
        password.type = "password";
        vision.className = "fas fa-eye-slash";
    }
}

function FogetVision() {
    let vision = document.getElementById("Forgetvisible");
    let password = document.getElementById("newpassword");

    if (password.type === "password") {
        password.type = "text";
        vision.className = "fas fa-eye";
    }
    else {
        password.type = "password";
        vision.className = "fas fa-eye-slash";
    }
}

function ConfirmFogetVision() {
    let vision = document.getElementById("Cforgetvisible");
    let password = document.getElementById("Confirm");

    if (password.type === "password") {
        password.type = "text";
        vision.className = "fas fa-eye";
    }
    else {
        password.type = "password";
        vision.className = "fas fa-eye-slash";
    }
}

function Loginvision(){
    let password = document.getElementById("Login_password");
    let Loginvisible = document.getElementById("Loginvisible");
    
    if(password.type === "password"){
        password.type = "text";
        Loginvisible.className = "fas fa-eye";
    }
    else{
        password.type = "password";
        Loginvisible.className = "fas fa-eye-slash";
    }
}





function signup_color() {

    document.getElementById("News").style.left = "130px";
    document.getElementById("News").style.top = "85px";

    document.getElementById("Loginvisible").style.display = "none";
    document.getElementById("Login_password").style.display = "none";
    document.getElementById("Login_email").style.display = "none";
    document.getElementById("Forgetvisible").style.display = "none";
    document.getElementById("Cforgetvisible").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("warning").style.top = "255px";
    document.getElementById("visibility").style.display = "block";
    document.getElementById("uname").style.borderColor = "black";
    document.getElementById("email").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
    document.getElementById("Confirm").style.borderColor = "black";
    document.getElementById("visible").style.display = "block";
    document.getElementById("uname").style.display = "block";
    document.getElementById("email").style.top = "196px";
    document.getElementById("character").style.display = "block";
    document.getElementById("uppercase").style.display = "block";
    document.getElementById("lowercase").style.display = "block";
    document.getElementById("digit").style.display = "block";
    document.getElementById("Passwordc").style.display = "block";
    document.getElementById("Passwordc").style.color = "red";
    document.getElementById("specialc").style.display = "block";
    document.getElementById("News").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("warningp").style.display = "none";
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("confirm-warning").style.top = "410px";
    document.getElementById("selecter").style.background = "#1E0E62";
    document.getElementById("signup").style.color = "#1E0E62";
    document.getElementById("selected").style.background = "#EBEAED";
    document.getElementById("login-color").style.color = "#EBEAED";
    document.getElementById("create").innerHTML = "Create an Account";
    document.getElementById("create").style.left = "65px";
    document.getElementById("Confirm").style.display = "block";
    document.getElementById("already").style.display = "block";
    document.getElementById("donot").style.display = "none";
    document.getElementById("forget").style.display = "none";
    document.getElementById("newpassword").style.display = "none";
    document.getElementById("email").style.display = "block";
    document.getElementById("password").style.display = "block";
    document.getElementById("Confirm").style.top = "350px";
    document.getElementById("warningp").style.top = "335px";
    document.getElementById("Password-change").style.display = "none";
    document.getElementById("IdLogin").style.display = "none";
    document.getElementById("create").style.display = "block";
}

function login_color() {

    document.getElementById("warningp").style.top = "335px";
    document.getElementById("Login_password").style.borderColor = "black";
    document.getElementById("visibility").style.display = "none";
    document.getElementById("Loginvisible").style.display = "block";
    document.getElementById("Login_password").style.display = "block";
    document.getElementById("Login_email").style.display = "block";
    document.getElementById("Login_email").style.borderColor = "black";
    document.getElementById("Forgetvisible").style.display = "none";
    document.getElementById("Cforgetvisible").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("warning").style.top = "255px";
    // document.getElementById("visibility").style.display = "block";
    document.getElementById("email").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
    document.getElementById("Login_email").style.top = "196px";
    document.getElementById("password").style.display = "block";
    // document.getElementById("email").style.display = "block";
    document.getElementById("userwarning").style.display = "none";
    document.getElementById("visible").style.display = "none";
    document.getElementById("uname").style.display = "none";
    document.getElementById("character").style.display = "none";
    document.getElementById("uppercase").style.display = "none";
    document.getElementById("lowercase").style.display = "none";
    document.getElementById("digit").style.display = "none";
    document.getElementById("specialc").style.display = "none";
    document.getElementById("Passwordc").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("warningp").style.display = "none";
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("selecter").style.background = "#EBEAED";
    document.getElementById("signup").style.color = "#EBEAED";
    document.getElementById("selected").style.background = "#1E0E62";
    document.getElementById("login-color").style.color = "#1E0E62";
    // document.getElementById("create").innerHTML = "Login";
    // document.getElementById("create").style.left = "65px";
    document.getElementById("Confirm").style.display = "none";
    document.getElementById("already").style.display = "none";
    document.getElementById("donot").style.display = "block";
    document.getElementById("forget").style.display = "block";
    document.getElementById("newpassword").style.display = "none";
    document.getElementById("Password-change").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("IdLogin").style.display = "block";
    document.getElementById("News").style.left = "175px";
    document.getElementById("News").style.top = "125px";
}

function forgetPassword(){

    document.getElementById("News").style.left = "95px";
    document.getElementById("News").style.top = "95px";

    document.getElementById("Loginvisible").style.display = "none";
    document.getElementById("IdLogin").style.display = "none";
    document.getElementById("Login_password").style.display = "none";
    document.getElementById("Login_email").style.display = "none";
    document.getElementById("Forgetvisible").style.display = "block";
    document.getElementById("Cforgetvisible").style.display = "block";
    document.getElementById("update").style.display = "block";
    document.getElementById("login-color").style.color = "#EBEAED";
    document.getElementById("newpassword").style.borderColor ="black";
    document.getElementById("warning").style.top = "185px";
    document.getElementById("newpassword").style.display = "block";
    document.getElementById("Confirm").style.display = "block";
    document.getElementById("Confirm").style.borderColor = "black";
    document.getElementById("Confirm").style.top = "275px";
    document.getElementById("warningp").style.display = "none";
    document.getElementById("warningp").style.top = "258px";
    document.getElementById("confirm-warning").style.top = "335px";
    document.getElementById("character").style.display = "block";
    document.getElementById("uppercase").style.display = "block";
    document.getElementById("lowercase").style.display = "block";
    document.getElementById("digit").style.display = "block";
    document.getElementById("Passwordc").style.display = "block";
    document.getElementById("specialc").style.display = "block";
    document.getElementById("email").style.display = "none";
    document.getElementById("Login_email").style.display = "block";
    document.getElementById("Login_email").style.top = "125px";
    document.getElementById("Login_email").style.bordercolor = "black";
    document.getElementById("password").style.display = "none";
    document.getElementById("visibility").style.display = "none";
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("forget").style.display = "none";
    document.getElementById("already").style.display = "none";
    document.getElementById("userwarning").style.display = "none";
    document.getElementById("donot").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("Password-change").style.display = "block";
    if(document.getElementById("Password-change").style.display == "block")
        {
            document.getElementById("Confirm").addEventListener("keyup" , function(){
                validateConfirmForgetPassword();
            });
        }
}


function validateForgetPassword() {
    let password = document.getElementById("newpassword").value.trim();
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let number = /[0-9]/g;
    let special = /[!@#$%^&*()-+=_{}|\;:"<>,./~]/g ;
    let warning = document.getElementById("warningp");

    document.getElementById("character").style.color = password.length >= 8 ? "green" : "red";
    document.getElementById("uppercase").style.color = password.match(upperCaseLetters) ? "green" : "red";
    document.getElementById("lowercase").style.color = password.match(lowerCaseLetters) ? "green" : "red";
    document.getElementById("digit").style.color = password.match(number) ? "green" : "red";
    document.getElementById("specialc").style.color = password.match(special) ? "green" : "red";

    if (!password) {
        warning.style.display = "block";
        warning.innerHTML = "* Password is required";
        warning.style.color = "red";
        document.getElementById("password").style.borderColor = "red"; 
        document.getElementById("newpassword").style.borderColor ="red";
        passwordValid = false;
    } 
    else if (password.length < 8 || !password.match(upperCaseLetters) || !password.match(lowerCaseLetters) || !password.match(number) || !password.match(special)) {
        warning.style.display = "block";
        warning.innerHTML = "* Please meet the password requirements";
        warning.style.color = "red";
        document.getElementById("newpassword").style.borderColor ="red";
        passwordValid = false;
    }
    else {
        warning.style.display = "none";
        document.getElementById("password").style.borderColor = "black";
        passwordValid = true;
        document.getElementById("newpassword").style.borderColor ="black";
    }

    // toggleSubmitButton();
}

function validateConfirmForgetPassword() {
    let confirmPassword = document.getElementById("Confirm").value.trim();
    // let password = document.getElementById("password").value.trim();
    let newpassword = document.getElementById("newpassword").value.trim();
    let confirmWarning = document.getElementById("confirm-warning");
    document.getElementById("Passwordc").style.color = (newpassword === confirmPassword) ? "green" : "red";
    // document.getElementById("Passwordc").style.color = (password === confirmPassword) ? "green" : "red";
    if (!confirmPassword) {
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Confirm password is required";
        confirmWarning.style.color = "red";
        document.getElementById("Confirm").style.borderColor = "red"; 
        document.getElementById("Passwordc").style.color = "red";
        confirmPasswordValid = false;
    }
    else if(confirmPassword !== newpassword){
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Password doesn't match";
        confirmWarning.style.color = "red";
        confirmPasswordValid = false;
    }
    else {
        confirmWarning.style.display = "none";
        document.getElementById("Confirm").style.borderColor = "black";
        // document.getElementById("Confirm").style.borderColor = "black";
        confirmPasswordValid = true;
    }

    // toggleSubmitButton();
}

function changePassword(){
    const email = document.getElementById("Login_email").value.trim();
    const password = document.getElementById("newpassword").value.trim();
    let emailwarning = document.getElementById("warning");
    let passwordwarning = document.getElementById("warningp");
    let confirm =document.getElementById("Confirm").value.trim();
    let index;
    let proceed = false;
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("warning").style.display = "none";
    if (!email) {
        emailwarning.style.display = "block";
        emailwarning.innerHTML = "* Email is required";
        emailwarning.style.color = "red";
        document.getElementById("Login_email").style.borderColor = "red";
        proceed = false;
    } 
    else if(!emailarray.includes(email)){
        emailwarning.style.display = "block";
        emailwarning.style.color = "red";
        emailwarning.innerHTML = "Email doesn't exit. Please first create an account";
        emailwarning.fontSize = "12px";
        document.getElementById("Login_email").style.borderColor = "red";
        proceed = false;
        return false
    }
    else{
        emailwarning.style.display = "none";
        index = emailarray.indexOf(email);
        proceed = true;
    }

    if(!password){
        passwordwarning.style.display = "block";
        passwordwarning.style.color = "red";
        passwordwarning.innerHTML = " * New password is required";
        passwordwarning.fontSize = "12px";
        document.getElementById("newpassword").style.borderColor ="red";
        proceed = false;
    }
    else if(passwordarray[index] === password){
        passwordwarning.style.display = "block";
        passwordwarning.style.color = "red";
        passwordwarning.innerHTML = " New password shouldn't match old password";
        passwordwarning.fontSize = "12px";
        document.getElementById("newpassword").style.borderColor ="red";
        return false;
    }
    else{
        passwordwarning.style.display = "none";
        // passwordarray[index] = password;
        document.getElementById("newpassword").style.borderColor ="black";
        proceed = true;
    }

    if(!confirm){
        document.getElementById("confirm-warning").style.display = "block";
        document.getElementById("confirm-warning").style.color = "red";
        document.getElementById("confirm-warning").innerHTML = " * Confirm password is required";
        proceed = false;

    }
    else if(confirm !== password){
        document.getElementById("confirm-warning").style.display = "block";
        document.getElementById("confirm-warning").style.color = "red";
        document.getElementById("confirm-warning").innerHTML = " * Confirm Password is required";
        proceed = false;
    }
    else{
        document.getElementById("confirm-warning").style.display = "none";
        passwordarray[index] = password;
        // console.log(emailarray , passwordarray);
        proceed = true;
    }

    if(proceed === true){

        console.log(index);
        console.log(emailarray , passwordarray);
        validateConfirmForgetPassword();
        document.getElementById("News").style.display = "block";
        document.getElementById("News").innerHTML = "Password Updated";
        document.getElementById("News").style.fontSize = "16px";
        document.getElementById("News").style.color = "green";
    }
    else{
        return true;
    }

}

function Account_login(){

    const email = document.getElementById("Login_email").value.trim();
    const password = document.getElementById("Login_password").value.trim();
    let emailwarning = document.getElementById("warning");
    let passwordwarning = document.getElementById("warningp");
    let proceed = false ;
    let index ;

    if(count >= 5){
        document.getElementById("News").style.display = "block";
        document.getElementById("News").style.color = "red";
        document.getElementById("News").innerHTML = " Account Blocked ";
        toggleSubmitButton();
        // document.getElementById("IdLogin").disabled = "false";
        count = -1;
    }

    if(!email){
        emailwarning.style.display = "block";
        emailwarning.innerHTML = "* Email is required";
        emailwarning.style.color = "red";
        document.getElementById("Login_email").style.borderColor = "red";
        proceed = false ;
    }
    else if(!emailarray.includes(email)){
        emailwarning.style.display = "block";
        emailwarning.style.color = "red";
        emailwarning.innerHTML = "Email doesn't exit. Please first create an account";
        document.getElementById("Login_email").style.borderColor = "red";
        proceed = false ;
        return false;
    }
    else{
        emailwarning.style.display = "none";
        document.getElementById("Login_email").style.borderColor = "black";
        index = emailarray.indexOf(email);
        // console.log(passwordarray[index]);
        proceed = true;
    }
    
    if(!password){
        passwordwarning.style.display = "block";
        passwordwarning.innerHTML = "* Password is required";
        passwordwarning.style.color = "red";
        document.getElementById("Login_password").style.borderColor = "red";
        proceed = false ;
        // count ++ ;
        // console.log(count);
    }
    else if(passwordarray[index] === password){

        console.log(passwordarray[index]);
        document.getElementById("Login_password").style.borderColor = "black";
        count = 0;
        proceed = true ;
    }
    else{
        passwordwarning.style.display = "block";
        passwordwarning.style.color = "red";
        passwordwarning.innerHTML = "Incorrect password";
        document.getElementById("Login_password").style.borderColor = "red";
        count++ ;
        console.log(count);
        proceed = false ;
    }

    if(proceed == true){
        document.getElementById("News").style.display = "block";
        document.getElementById("News").style.color = "green";
        document.getElementById("News").innerHTML = "Login Successful";
    }
    else{
        return false;
    }
}

function validateLoginemail(){
    let email = document.getElementById("Login_email").value.trim();
    let emailwarning = document.getElementById("warning");

    document.getElementById("Login_email").style.borderColor = "black";

    if(!email){
        emailwarning.style.display = "block";
        emailwarning.style.color = "red";
        emailwarning.innerHTML = "* Email is required";
        document.getElementById("Login_email").style.borderColor = "red";
    }
    // else if(!emailarray.includes(email)){
    //     emailwarning.style.display = "block";
    //     emailwarning.style.color = "red";
    //     emailwarning.innerHTML = "Email doesn't exit. Please first create an account";
    //     document.getElementById("Login_email").style.borderColor = "red";
    //     return;
    // }
    else{
        emailwarning.style.display = "none";
    }
}

function toggleLogout() {
    const logoutElement = document.getElementById("toggle-logout");
    if (logoutElement.style.display === "block") {
        logoutElement.style.display = "none";
    } 
    else {
        logoutElement.style.display = "block";
    }
}

function back(){
    window.location = "index.html";
}
