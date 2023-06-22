// Assignment code here
const keys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVwxyz",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol:"!@#$%^&*()_+?<>;:=-"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert 
  const upper = document.getElementById ("uppercase");
  const lower = document.getElementById("lowercase");
  const number = document.getElementById("number");
  const symbol = document.getElementById("symbol");
  if (upper + lower + number + symbol === 0) {
    alert ("Please check atleast one box!");
    return;
  }
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


