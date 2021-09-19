// Assignment code here
var lowerCaseLetters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
] 

var upperCaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

var specialCharacters = ['/', '-', '&', '%', '_', '=', '?', '!']

var teeth = 6
console.log(upperCaseLetters[teeth])



var generatePassword = function() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  window.prompt("how many characters would you like in your password?")

  window.confirm("would you like to include lowercase numbers")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
