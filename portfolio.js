function validateForm() {
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;
  var pronouns = document.getElementById("pronouns").value;
  var email = document.getElementById("email").value;
  var reason = document.getElementById("reason").value;

  if( first == "" ) {
    alert( "First name field is required." );
    return false;
  }
  if( last == "" ) {
    alert( "Last name field is required." );
    return false;
  }
  if( hasNumber(first) == true || hasNumber(last) == true ) {
    alert( "Does your name have numbers in it..?" );
    return false;
  }
  if( pronouns == "unselected" ) {
    alert( "Please select an option for your preferred pronouns." );
    return false;
  }
  if( email == "" ) {
    alert( "Email field is required." );
    return false;
  }
  if (validateEmail() == false) {
    alert( "Please enter a valid email.");
    return false;
  }
  if( reason == "" ) {
    alert( "Please fill out a reason for contact." );
    return false;
  }
  else {
    alert("Unfortunately, I don't have a server to process this data! This is a psuedo-form.")
    return true;
  }
}

function validateEmail() {
  var emailCheck = document.getElementById("email").value;
  var atPos = emailCheck.indexOf("@");
  var dotPos = emailCheck.lastIndexOf(".");

  if (atPos < 1 || (dotPos - atPos < 2)) {
    return false;
  }
  return true;
}

function hasNumber(string) {
    return /\d/.test(string);
}
