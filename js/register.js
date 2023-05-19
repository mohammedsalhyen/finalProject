
let users=[];
// get the form values
let myForm = document.querySelector("#register-form");
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector("#password");
let password2 = document.querySelector("#repeated-password");
let address = document.querySelector('#address');
let bloodType = document.querySelector('#blood-type');
let age =document.querySelector("#age");
let maritalStatus=document.querySelector("#state");
let gender = document.querySelector('#gender');
let nationalID=document.querySelector("#national-id");
let lastDonationMonth = document.querySelector('#last-donation-month');
let lastDonationYear = document.querySelector('#last-donation-year');
console.log(myForm)
// on click submit 
myForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  
  isValid();
}); 

const setError =(el,massage)=>{
    let textInput=el.parentElement;
    let erroeDisplay=textInput.querySelector(".error-place")
    erroeDisplay.innerText=massage;
    textInput.classList.add("error");
    textInput.classList.remove("success");
}
const setSuccess = el=>{
    let textInput=el.parentElement;
    let erroeDisplay=textInput.querySelector(".error-place")
    erroeDisplay.innerText=" ";
    textInput.classList.add("success");
    textInput.classList.remove("error");
}
const isValidEmail = email=>{
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}
const isValidName = name=>{
    let reg=/^[a-zA-Zء-ي ]{2,15}$/;
    return reg.test(String(name));
}
const isValidPhone= phone=>{
    let reg=/^0\d{10}$/;
    return reg.test(phone);
}
const isValidAge = age=>{
  let reg=/^\d{3}$/;
  return reg.test(age);
}
const isValidMonth = month=>{
  let reg=/^\d{2}$/;
  return reg.test(month);
}
const isValidYear = year=>{
  let reg=/^\d{4}$/;
  return reg.test(year);
}
const isValidNationalId = nationalID=>{
  let reg=/^\d{14}$/;
  return reg.test(nationalID);
}
const isValid=()=>{
  //remove white spaces
  let firstNameValue         =  firstName.value.trim();
  let lastNameValue          =  lastName.value.trim();
  let emailValue             =  email.value.trim();
  let phoneValue             =  phone.value.trim();
  let passwordValue          =  password.value.trim();
  let password2Value         =  password2.value.trim();
  let ageValue               =  age.value.trim();
  let nationalIDValue        =  nationalID.value.trim();
  let lastDonationMonthValue =  lastDonationMonth.value.trim();
  let lastDonationYearValue  =  lastDonationYear.value.trim();

  let addressValue = document.querySelector('#address').value;
  let bloodTypeValue  = document.querySelector('#blood-type').value;
  let maritalStatusValue  =document.querySelector("#state").value;
  let genderValue  = document.querySelector('#gender').value;
  //#############################################

//check for validate first name 
  if (firstNameValue==="") {
    setError(firstName,"your first name is required")
  } else if (!isValidName(firstNameValue)){
    setError(firstName, 'Provide a valid name');
  }else{
    setSuccess(firstName)
  }

//check for validate last name 
  if (lastNameValue==="") {
    setError(lastName,"your last name is required")
  } else if (!isValidName(lastNameValue)){
    setError(lastName, 'Provide a valid name');
  }else{
    setSuccess(lastName)
  }
  //check for validate Email
  if (emailValue==="") {
    setError(email,"your email is required")
  } else if (!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email');
  }else{
    setSuccess(email)
  }
  //check for validate phone
  if (phoneValue==="") {
    setError(phone,"your phone is required")
  } else if (!isValidPhone(phoneValue)){
    setError(phone, 'Provide a valid phone');
  }else{
    setSuccess(phone)
  }
  //check for validate password
  if (passwordValue==="") {
    setError(password,"your password is required")
  }else if(passwordValue.length < 8){
    setError(password, 'Password must be at least 8 character.');
  } else {
    setSuccess(password);
  }

  //check for validate password2
  if (passwordValue==="") {
    setError(password2,"Please confirm your password")
  }else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  }else {
    setSuccess(password2);
  }
  //check for validate age
  if (ageValue==="") {
    setError(age,"your first age is required")
  } else if (!isValidAge(ageValue)){
    setError(age, 'Provide a valid age');
  }else{
    setSuccess(age)
  }
  //check for validate nationalID
  if (nationalIDValue==="") {
    setError(nationalID,"your first National ID is required")
  } else if (!isValidNationalId(nationalIDValue)){
    setError(nationalID, 'Provide a valid National ID ');
  }else{
    setSuccess(nationalID)
  }
  //check for validate last Donation Month
  if (lastDonationMonthValue==="") {
    setError(lastDonationMonth,"The date is not valid ")
  } else if (!isValidMonth(lastDonationMonthValue)){
    setError(lastDonationMonth, 'Provide a valid month ');
  }else{
    setSuccess(lastDonationMonth)
  }
  //check for validate last Donation Month
  if (lastDonationYearValue==="") {
    setError(lastDonationYear,"The date is not valid ")
  } else if (!isValidYear(lastDonationYearValue)){
    setError(lastDonationYear, 'Provide a valid year ');
  }else{
    setSuccess(lastDonationYear)
  }

  // create an object to store the user's information
  users.push({
    firstNameValue,
    lastNameValue,
    emailValue,
    phoneValue,
    passwordValue,
    addressValue,
    bloodTypeValue,
    ageValue,
    maritalStatusValue,
    genderValue,
    lastDonationMonthValue,
    lastDonationYearValue
  });
  myForm.submit();
}

let urlType = decodeURI(getUrlParameter('type'))
let donor=document.querySelector("#register-form .donor");
let organization=document.querySelector(" #register-form .organization");
let formHeader=document.querySelector(".registration-form h1")
if (urlType === "organization") {
  donor.classList.add("d-hide");
  formHeader.innerText="Register As Organization";
}
else{
  organization.classList.add("d-hide");
}
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}


























    

  // redirect the user to the login page
   // window.location.href = 'login.html';



