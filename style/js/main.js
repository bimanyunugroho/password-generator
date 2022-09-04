// Ambil ID di form -> input 
var password = document.getElementById("passwordGenerator");

// Onclick function genPassword di button Generate
function genPassword() {
    // Definisikan password, panjang passowrd, dan password kosong yang nantinya akan ditimpa dari password random
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    
    for (var i = 0; i <= passwordLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber + 1);
    }

    // Timpa ke password baru
    document.getElementById("passwordGenerator").value = password;
}

// Onclick copyPassword di button Copy
function copyPassword() {
   var copyText = document.getElementById("passwordGenerator").value;
   var copy = navigator.clipboard.writeText(copyText);

   if (copy) {
    alert("Password is successfully copied")
   } else {
    alert("Password is not copied");
   }
}


