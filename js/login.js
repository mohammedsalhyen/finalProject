//get the Elements
let myForm=document.querySelector(".login-form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");

console.log(myForm);
console.log(email);
console.log(password);
//onclik submit 
myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    isValid();
})

let setError=(el,massage)=>{
    let textInput=el.parentElement;
    let erroeDisplay=textInput.querySelector(".error-place");
    erroeDisplay.innerText=massage;
    textInput.classList.add("error");
    textInput.classList.remove("success");
}
let setSuccess=el=>{
    let textInput=el.parentElement;
    let erroeDisplay=textInput.querySelector(".error-place");
    erroeDisplay.innerText=" ";
    textInput.classList.add("success");
    textInput.classList.remove("error");
}
let isValidEmail=email=>{
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase())
}
let isValid=()=>{
    let emailValue=email.value.trim();
    let passwordValue=password.value.trim();
    
    console.log(emailValue);
    console.log(passwordValue);
    //check validate email
    if (emailValue==="") {
        setError(email,"The email is requried");
    } else if(!isValidEmail(emailValue)) {
        setError(email,"plaese enter valid email");
    }else{
        setSuccess(email);
    }
     //check validate password
    if (password==="") {
        setError(passwordValue,"The password is requried");
    } else if(passwordValue.length<8) {
        setError(password,"plaese enter valid password");
    }else{
        setSuccess(password);
    }
}