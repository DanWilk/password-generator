// Assignment code here
var lowerCaseLetters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var specialCharacters = ['/', '-', '&', '%', '_', '=', '?', '!'];

console.log(upperCaseLetters);

var generatePassword = function() {

  // keeps user from asking for too few or many characters
  var characterCount = function () {

    var userInput = window.prompt("how many characters would you like in your password?");

    if (userInput >= 8 && userInput <=128) {
      console.log("password length: " + userInput);
      return(userInput)
    } else if (userInput > 128) {
      window.alert("I'm sorry but that is too many characters.");
     characterCount();
    } else if (userInput < 8) {
     window.alert("I'm sorry but that is too few characters.");
      characterCount();
    } else {
      window.alert("I'm sorry but that isn't a valid option");
      characterCount();
    }
  }
  var userInput = characterCount();

  // asking the user what they would like to include in the password
  var userSpecial = window.confirm("would you like to allow special characters in your password?");

  var userUpperCase = window.confirm("Would you like uppercase letters in your passwords?");
  
  var userLowerCase = window.confirm("Would you like lowercase letters in your passwords?");

  var userNumbers = window.confirm("Would you like to add numbers to your password?");
    // for loop to ensure password is desired length 
  var passcode = "";

  for (var i = 0; i < userInput; i++) {

    var typeSelector = Math.floor(Math.random() * 4);
    if (typeSelector === 0 && userSpecial) {
      passwordItem = specialCharacters[Math.floor(Math.random() * 8)];
      console.log(passwordItem);
    } else if (typeSelector === 1 && userUpperCase) {
      var passwordItem = upperCaseLetters[Math.floor(Math.random() * 26)];        console.log(passwordItem);
    } else if (typeSelector === 2 && userLowerCase) {
      var passwordItem = lowerCaseLetters[Math.floor(Math.random() * 26)];
      console.log(passwordItem);
    } else if (typeSelector === 3 && userNumbers) {
      var passwordItem = [Math.floor(Math.random() * 9)];
      console.log(passwordItem);
    }
    //adding all items together to create a password
    passcode = passcode + passwordItem;
  }

  return(passcode);

  // console.log("new password: " + passcode);



}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


 // window.confirm("would you like to include lowercase numbers")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
