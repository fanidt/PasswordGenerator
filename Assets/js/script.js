// numbers array
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//lower case array
var lowerCasesChar = [
  "a",  "b",  "c", "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z"
];
//upper case array
var upperCasesChar = [
  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"
];
// special characters array
var specialChar = [
  "@",  "%",  "+",  "\\",  "/",  "'",  "!",  "#",  "$",  "^",  "?",  ":",  ",",  ")",  "(",  "}",  "{",  "]",  "[",  "~",  "-",  "_",  "."
];




// Assignment code here

function getpasswordData () {

  var passwordLength = parseInt(prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128."));

  if (passwordLength<12 )
{
  alert("A minimum number of 8 characters requried.");
    generatePassword();
  }
  if(passwordLength > 128 ) {
    alert("A Maximum number of 128 characters requried.");
    generatePassword();
  }
  if (isNaN(passwordLength)) {
    alert("Invalid input. Please insert a number.");
    generatePassword();
  }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  if (!numbers && !lowerCases && !upperCases && !special){

    alert("the password cannot be created if no characters are selected")
  }

// object storing password data
  var passwordData = {
    passwordLength: passwordLength,
    includeNumbers: numbers ,
    includeLowerCase: lowerCases,
    includeUpperCase: upperCases,
    includespecial: special

  };
  
}













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

getpasswordData();

generateBtn.addEventListener("click", writePassword);