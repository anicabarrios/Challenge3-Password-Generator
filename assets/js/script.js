// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase="abcdefghijkmnopqrstuvxyz";
var uppercase=lowercase.toUpperCase();
var numeric="0123456789";
var specialCharacter="!@#$%^&*~";

function generatePassword(){
  var savedPassword="";
  var passwordSize=prompt("Enter password lenght between 8 and 128 characters")
  console.log(passwordSize)

  if (passwordSize>=8 && passwordSize<=128){
    var confirmLowerCase=confirm("Do you want lowercase included in the password?");
    console.log(confirmLowerCase);

    var confirmUpperCase=confirm("Do you want uppercasecase included in the password?");
    console.log(confirmUpperCase);

    var confirmNumeric=confirm("Do you want numeric included in the password?");
    console.log(confirmNumeric);

    var confirmSpecialCharacter=confirm("Do you want special character included in the password?");
    console.log(confirmSpecialCharacter);

    for (var i=0; i<passwordSize; i++){

    if(confirmLowerCase && savedPassword.length < passwordSize){
      var randomIndex= Math.floor (Math.random()* lowercase.length);
      console.log(randomIndex);

      savedPassword= savedPassword + lowercase[randomIndex]

    }
    if(confirmUpperCase && savedPassword.length < passwordSize){
      var randomIndex= Math.floor (Math.random()* uppercase.length);
      console.log(randomIndex);

      savedPassword= savedPassword + uppercase[randomIndex]

    }

    if(confirmNumeric && savedPassword.length < passwordSize){
      var randomIndex= Math.floor (Math.random()* numeric.length)
      console.log(randomIndex);

      savedPassword= savedPassword + numeric[randomIndex]

    }
    if(confirmSpecialCharacter && savedPassword.length < passwordSize){
      var randomIndex= Math.floor (Math.random()* specialCharacter.length)
      console.log(randomIndex);

      savedPassword= savedPassword + specialCharacter[randomIndex]

    }
  }
  }

  else{
    alert ("Invalid entry!!! Password lenght must be between 8 and 128 characters!");
  }

  return savedPassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
