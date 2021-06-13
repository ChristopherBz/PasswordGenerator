// Assignment Code

//Password varibles
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Event listener on generate button
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);

// Write password on page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
  
}
// generate password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askLowercase) {
    for (var i of lowerCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askUppercase) {
    for (var i of upperCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askNumeric) {
    for (var i of numeric)
    possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
    possibleCombo.push(i);
  }
  
  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  
  console.log(finalPassword);

  return finalPassword;
}

// Questions function
// on button click - start prompt
// prompted for password criteria - pop up, prompt function
// password length, atleast 8 characters, no more than 128.
// types: lowercase, uppercase, numeric, and/or special characters
// select multiple criteria

function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length from 8 - 128");
    var askLowercase = confirm("Do you want lowercase letters?");
    var askUppercase = confirm("Do you want uppercase letters?");
    var askNumeric = confirm("Do you want numbers?");
    var askSpecial = confirm("Do you want special characters?");
    var responses = {
      length : length,
      askLowercase : askLowercase,
      askUppercase : askUppercase,
      askNumeric : askNumeric,
      askSpecial : askSpecial,
    }
    if((length < 8)||(length > 128))
    alert("Has to be between 8 - 128, Ya Know What I'm Saying?");
    else if((!askLowercase)&&(!askUppercase)&&(!askNumeric)&&(!askSpecial))
    alert("You must choose atleast one, Comprende?");
    else 
    isValid = true;
  }
  while (!isValid);
  return responses;
}
