// form
const form = document.getElementById("form");
// name
const nameLabel = document.getElementById("nameLabel");
const name = document.getElementById("name");
const namePattern = /[A-Za-z]{1,32}/;
// email
const emailLabel = document.getElementById("emailLabel");
const email = document.getElementById("email");
const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
// Phone Number
const numberLabel = document.getElementById("numberLabel");
const number = document.getElementById("number");
const numberPattern = /[789][0-9]{9}/;

// country 
const countryLabel = document.getElementById("countryLabel");
const country = document.getElementById("country");
const countryPattern = /^$|^[a-zA-Z]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEmailValid = emailPattern.test(email.value);
  let isNumberValid = numberPattern.test(number.value);
  let isNameValid = namePattern.test(name.value);
  let isCountryValid = countryPattern.test(country.value);

  if (isEmailValid) {
    // console.log("Valid email address");
    email.setAttribute("placeholder", "eg. surya.kiran@life9sys.com");
    emailLabel.classList.remove("text-red");
    email.classList.remove("placeholder-red");
    email.classList.add("placeholder-[#877c88]");
    email.classList.remove("border-red");
    email.classList.add("border-black");
  } else {
    // console.log("Invalid email address");
    email.value = "";
    email.setAttribute("placeholder", "Please enter a valid email address");
    email.classList.remove("placeholder-[#877c88]");
    email.classList.add("placeholder-red");
    email.classList.remove("border-black");
    email.classList.add("border-red");
    emailLabel.classList.add("text-red");
  }

  if (isNumberValid) {
    // console.log("Valid number");
    number.setAttribute("placeholder", "eg. 1234567890");
    numberLabel.classList.remove("text-red");
    number.classList.remove("placeholder-red");
    number.classList.add("border-black");
    number.classList.remove("border-red");
    number.classList.add("placeholder-[#877c88]");
  } else {
    // console.log("Invalid number");
    number.value = "";
    number.setAttribute("placeholder", "Please enter a valid phone number");
    number.classList.remove("placeholder-[#877c88]");
    number.classList.add("placeholder-red");
    number.classList.remove("border-black");
    number.classList.add("border-red");
    numberLabel.classList.add("text-red");
  }

  if (isNameValid) {
    // console.log("Valid number");
    name.setAttribute("placeholder", "Please enter your name");
    nameLabel.classList.remove("text-red");
    name.classList.remove("placeholder-red");
    name.classList.add("border-black");
    name.classList.remove("border-red");
    name.classList.add("placeholder-[#877c88]");
  } else {
    // console.log("Invalid number");
    name.value = "";
    name.setAttribute("placeholder", "Please enter a valid name");
    name.classList.remove("placeholder-[#877c88]");
    name.classList.add("placeholder-red");
    name.classList.remove("border-black");
    name.classList.add("border-red");
    nameLabel.classList.add("text-red");
  }
  if (isCountryValid) {
    // console.log("Valid number");
    country.setAttribute("placeholder", "eg. India");
    countryLabel.classList.remove("text-red");
    country.classList.remove("placeholder-red");
    country.classList.add("border-black");
    country.classList.remove("border-red");
    country.classList.add("placeholder-[#877c88]");
  } else {
    // console.log("Invalid number");
    country.value = "";
    country.setAttribute("placeholder", "Please enter valid input");
    country.classList.remove("placeholder-[#877c88]");
    country.classList.add("placeholder-red");
    country.classList.remove("border-black");
    country.classList.add("border-red");
    countryLabel.classList.add("text-red");
  }
  
  // Submit the form if both email and number are valid
  if (isEmailValid && isNumberValid && isNameValid && isCountryValid) {
    form.submit();
  }
});
