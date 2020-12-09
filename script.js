// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: create a generatePassword function (!!write all logic within this function!!)

function generatePassword() {
  
// TODO: create confirm to ask user if they want uppercase letters and set to a variable

// TODO: create confirm to ask user if they want lowercase letters and set to a variable

// TODO: create confirm to ask user if they want number letters and set to a variable

// TODO: create confirm to ask user if they want special character letters and set to a variable

// TODO: create prompt to ask user how many char they want their pass to be and set to a variable (at least 8 characters, no more than 128)

// var passLength = prompt(" how long ? (between 8-128)")

// TODO: create a conditional to make sure that the user has chosen at least one type of character

// TODO: create an array of uppercase letters, lowercase letters, nums, and special char.

// TODO: Create an empty array to hold user requested characters

// TODO: Create multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, push those specific chars to our empty array

// var specialCharQ = confirm("Would you like special chars in your password")
// var myFinalArrOfChar = ''
// var specific = ")(&^%$"

// if (specialCharQ) {
//  // push all the special chars in the empty array
//     myFinalArrayOfChar = myFinalArrayOfChar+specific
// }

// TODO: create a var to hold the final results

var finalPassword;

// TODO: A for loop to loop over my final array, it should run based on the results of the prompt when we asked user how many chars they like their pass to be, choose randomly from final array that holds all the characters that the user wanted and save them to our finalPassword variable

// for (var i = 0; i < passLength; i++) {
  // var randomNum = Math.floor(Math.random()* // length of final array)
  // finalPassword = finalPassword + finalArray[randomNum]     
// }

// TODO: return the finalPassword from this function out side of the for loop at the end of this function

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
