/* login validation */
let email =document.getElementById("email");
let error =document.getElementById("erroremail");
function validate1(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML=" ";
        return true;
    }
    else{
        if(email.value==""){
            
            error.innerHTML=" ";
        }
        else{ 
        error.innerHTML="Please enter a valid email";
        error.style.color="red";
        error.style.fontWeight="bold";
        return false;
        }
       
    }

    
}
/* signup validation*/
let name =document.getElementById("name");
let email1 =document.getElementById("email1");
let phn =document.getElementById("phone-no");
let pwd =document.getElementById("pwd");
let erroremail =document.getElementById("erroremail");
let errorphn =document.getElementById("errorphn");
let errorpwd =document.getElementById("errorpwd");

function validate2(){
    let n=validateemail();
    let e=validatephn();
    let ph=validatepwd();
    console.log(n,e,ph);
    return (n&&e&&ph);
}  

function validateemail(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email1.value)){
        erroremail.innerHTML=" ";
        return true;
    }
    else{
        if(email1.value==""){
            
            erroremail.innerHTML=" ";
        }
        else{ 
        erroremail.innerHTML="Invalid Email-id";
        erroremail.style.color="red";
        erroremail.style.fontWeight="bold";
        return false;
        }
       
    }

    
}
function validatephn(){
    var ph = /^([0-9]{3})[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/;
    if(ph.test(phn.value)){
        errorphn.innerHTML=" ";
        return true;
    }
    else{
        if(phn.value==""){
            
            errorphn.innerHTML=" ";
        }
        else{ 
        errorphn.innerHTML="Invalid Phone number";
        errorphn.style.color="red";
        errorphn.style.fontWeight="bold";
        return false;
        }
       
    }
}
function validatepwd(){
    var p=/^([A-Za-z0-9]+)$/;
    if(pwd.value.length>1 && pwd.value.length<8){
       errorpwd.innerHTML="Use 8 characters or more for your password";
       errorpwd.style.color="red";
       return false;
    }
    else if(!(p.test(pwd.value))){
        errorpwd.innerHTML="<b>Hint</b>: Use atleast one (lowercase,uppercase & number) and minimum 8 chracters,<spam style='color:red'>No special characters are allowed.</spam>";
        errorpwd.style.fontSize="10px";
        errorpwd.style.color="wheat";

        return false;
    }
    else{
        errorpwd.innerHTML=" ";
        return true;
    }

}


function strengthpwd(pwd) {
    var password_strength = document.getElementById("password-text");

    if (pwd.length == 0) {
      password_strength.innerHTML = "";
      return;
    }
    var passscr = 0;

    if(/[a-z]/.test(pwd)){
        passscr+=25;
    }
    if(/[A-Z]/.test(pwd)){
        passscr+=25;
    }
    if(/[\d]/.test(pwd)){
        passscr+=25;
    }
    if(pwd.length>8){
        passscr+=25;
    }
    var strength = "";
    if(passscr>=100){
        strength = "<small class='progress-bar bg-success' style='width: 100%; color:black; font-weight:bold;'>Strong</small>";
         
    }
    else if(passscr>=50){
        strength = "<small class='progress-bar bg-warning' style='width: 60%; color:black; font-weight:bold;'>Medium</small>";
        
    }
    else{
        strength = "<small class='progress-bar bg-danger' style='width: 40%; color:black; font-weight:bold;'>Weak</small>";
    }
    password_strength.innerHTML = strength;

  }

 






