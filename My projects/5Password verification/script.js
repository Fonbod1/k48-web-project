// defind variables
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

// When the user click on the text area of the pasword, display
// The message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block"
}

// If a user clicks on the outside of the pasword area, 
// Hide the message box

myInput.onblur = function() {
  document.getElementById("message").style.display = "none"
}

// When a user starts to type something inthe password area

myInput.onkeyup = function() {
  // validate the lowercase letter
  var lowerCaseLetters = /[a-z]/g
  if(myInput.value.match(lowerCaseLetters)){
// if the password contain a lowercase letter
// the invalid class is removed and replace with valid
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  }else {
    // We will replace the valid with invalid
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }
  // validate the uppercase letter
  var upperCaseLetters = /[A-Z]/g
  if(myInput.value.match(upperCaseLetters)){
// if the password contain a capitalcase letter
// the invalid class is removed and replace with valid
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  }else {
    // We will replace the valid with invalid
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }
  // validate the number
  var numbers = /[0-9]/g
  if(myInput.value.match(numbers)){
// if the password contain a number
// the invalid class is removed and replace with valid
    number.classList.remove('invalid');
    number.classList.add('valid');
  }else {
    // We will replace the valid with invalid
    number.classList.remove('valid');
    number.classList.add('invalid');
  }
  // validate atleast eight lettes
  //var length = /[a-z]/g
  if(myInput.value.length >= 8){
// if the password contain atleast eight letters
// the invalid class is removed and replace with valid
    length.classList.remove('invalid');
    length.classList.add('valid');
  }else {
    // We will replace the valid with invalid
    length.classList.remove('valid');
    length.classList.add('invalid');
  } 



}
