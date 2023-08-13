//Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789"
  const symbol = "!@#$%^&*()_+=-`}{/<>";
  let password = "";
  password += upperCase[Math.floor(Math.random()* upperCase.length)];
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
  password += number[Math.floor(Math.random()* number.length)];
  password += symbol[Math.floor(Math.random()* symbol.length)];


return "Generated Password: " + password;
}

//write password to the #passowrd input 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//Add Event Listener

generateBtn.addEventListener("click", writePassword);