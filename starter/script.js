// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// declaring the variable passwordLength and attrributing the minimum length of 10
let passwordLength = 10;
//invoke the first password choice prompt when pressing the red button




// Function to prompt user for password options
function getPasswordOptions() {
  /* need to use if statements here for the user to go through the options related to password choices. These will be:
  1. length of password(pw)
  2. choice of numbers
  3. choice of uppecase characters
  4. choice of lowercase characters
  5. choice of special characters.*/
  //converting the string in passwordLength length choice to a number
let passwordLength = parseInt(prompt("Enter a number between 10 and 64 to choose the length of your secure password.."));
let numbers = passwordLength <= 64 || passwordLength >= 10;
let capitalLetters = false || true;
let lowercaseLetters = false || true;
let specialLetters = false || true;
/* when the user enters the password length the program needs to convert the passwordLength string to a number. Will need to use parseInt together with if/else conditionals*/
if (numbers) {
  prompt("Do you want numbers in your password? Enter ok for yes and cancel for no");
} 
if (capitalLetters) {
  prompt("Do you want CAPITAL letters in your password? Enter ok for yes and cancel for no");
} 
if (lowercaseLetters) {
  prompt("Do you want lowercase letters in your password? Enter ok for yes and cancel for no");
}
if (specialLetters) {
  prompt("Do you want letters (e.g. &, *, %, $, £, !, +, = in your password? Enter ok for yes and cancel for no");
} 
 alert("Now generate your password...");
}
getPasswordOptions();//this works

/*when the user clicks ok on numbers then there should be a function that draws out random numbers from an array. If the user clicks no then the loop 
should move onto the loop for capital letters. If yes is clicked here a function should draw out capital letters from an array and then move onto the next
choice whihc is lowercase letters. If no the loop should go to next choice which is lowercase. If no here then the loo should go to next choice which is 
special letters and then the passwored generated. If yes is clicked here a function should draw out lowercase letters from an array and then move onto the next array which
is special letters. If yes is chosesn here a function should draw out speical case letters from an array and then the password should be generated. If no then the
password should be generated without special characters. Need to use for loops and iterate into the array(s)*/

//numbers array
for (let i = 0; i < numericCharacter.length; i++) {
  const numeral = numericCharacter[i];
  Math.random()
}




/* Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);*/