var copyBtn = document.getElementById('copy');

function getPassword() {
  //alert('clicked')
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 16;
  var password = "";

  // Generate the password
   for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1)

        // Display the password
        document.getElementById('password').value = password;

        // Changing the boutton style. 
        copyBtn.style.background = "#6c757d"
        copyBtn.style.color="#fff"
   }
}

   // Copy The password

   function copyMdp() {
        var inputPassword = document.getElementById('password');
        // Verify the length of the password
     if(inputPassword.value.length == 16){

         // copy the password
         inputPassword.select();

        

         document.execCommand("copy");

         // Change the style of the copy button
          copyBtn.style.background = "transparent";
          copyBtn.style.color = "#000"
          // Display the alert
          alert('Password has been copied !')

     }else{
      alert('Please generate a password')
     }

   }

   