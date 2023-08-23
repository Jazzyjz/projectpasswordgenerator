//Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//create variables for password 
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789"
  const symbol = "!@#$%^&*()_+=-`}{/<>";
  let possibleChoice = "";

  //create prompt for user to enter password length

  let answer = parseInt(prompt("Enter length of password")) ;
  //create alert if user enters less than 8 characters 
  if( answer < 8 ) {
    alert("Password must be more than 8 characters!");
    return "please try again";
  }
  //create alert if user uses more than 128 characters
  if(answer>128){
    alert("password must be less than 128 characters!");
    return "please try again";
  };
  //create alert if user does not input number
  if(isNaN(answer)){
    alert("please pick a number");
    return "please try again";
  };
  //create functions for lowercase,uppercase, numeric, and special characters
  let lowerCasea = confirm("Do you want lowercase?");
  
  //console.log(lowerCasea);

  let upperCasea = confirm("Do you want uppercase?");
  //console.log(upperCasea);
  
  let numbera = confirm("Do you want numbers?");
  // console.log(numbera);

  let symbola = confirm("Do you want symbols?");
  // console.log(symbola);

  
//create if statements for client password request
if (answer){
  possibleChoice.length += answer;
}
  if (lowerCasea){
    possibleChoice += lowerCase[Math.floor(Math.random()*26)];
  }
  if (upperCasea){
    possibleChoice += upperCase[Math.floor(Math.random()*26)];
  }
  if (numbera){
    possibleChoice += number[Math.floor(Math.random()*10)];
  }
  if (symbola){
    possibleChoice += symbol[Math.floor(Math.random()*19)];
  }
return "Generated Password: " + possibleChoice;
}

//write password to the #passowrd input 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//Add Event Listener

generateBtn.addEventListener("click", writePassword);