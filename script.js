// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//  create a generatePassword function (!!write all logic within this function!!)

function generatePassword() {
  
// create confirm to ask user if they want uppercase letters and set to a variable

var uppercaseQ = confirm("Would you like your password to contain Uppercase letters?")

// create confirm to ask user if they want lowercase letters and set to a variable

var lowercaseQ = confirm("Would you like your password to contain Lowercase letters?")

// create confirm to ask user if they want number letters and set to a variable

var numbersQ = confirm("Would you like your password to contain Numbers?")

// create confirm to ask user if they want special character letters and set to a variable

var specialCharactersQ = confirm("Would you like your password to contain Special Characters?")

// create prompt to ask user how many char they want their pass to be and set to a variable (at least 8 characters, no more than 128)

var testPasswordLength = prompt("How long do you want your password to be? Please pick a number between 8 and 280.")

if ( testPasswordLength < 8)
{
  alert("Too short, must be greater than 8!")
}
else if (testPasswordLength > 280)
{
  alert("Too long, must be shorter than 280.")
}
else 
{
  passwordLength = testPasswordLength
}

// create a conditional to make sure that the user has chosen at least one type of character

if (!uppercaseQ && !lowercaseQ && !numbersQ && !specialCharactersQ)
{
  alert("Must select at least one password criteria!")
}

// create an array of uppercase letters, lowercase letters, nums, and special char.

var uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var specialCharacters = ["!@#$%^&*()_"]

// Create an empty array to hold user requested characters

var finalArrayOfCharacters = []

// Create multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, push those special chars to our empty array

if (uppercaseQ) {
 // push all the special chars in the empty array
    finalArrayOfCharacters = finalArrayOfCharacters + uppercaseLetters
}
if (lowercaseQ) {
 // push all the special chars in the empty array
    finalArrayOfCharacters = finalArrayOfCharacters + lowercaseLetters
}
if (numbersQ) {
 // push all the special chars in the empty array
    finalArrayOfCharacters = finalArrayOfCharacters + numbers
}
if (specialCharactersQ) {
 // push all the special chars in the empty array
    finalArrayOfCharacters = finalArrayOfCharacters + specialCharacters
}
console.log(finalArrayOfCharacters)
// create a var to hold the final results

var finalPassword = "";

// A for loop to loop over final array, it should run based on the results of the prompt when we asked user how many chars they like their pass to be, choose randomly from final array that holds all the characters that the user wanted and save them to our finalPassword variable

for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random()*finalArrayOfCharacters.length) // length of final array)
  finalPassword = finalPassword + finalArrayOfCharacters[randomNum]
  console.log(i + " " + finalPassword)
}
console.log(finalPassword)

// return the finalPassword from this function out side of the for loop at the end of this function

return finalPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
