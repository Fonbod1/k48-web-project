var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function sauter(){
  //function to cause the image to jump
  //alert("you have click on the button");
   if(perso.classList != "animation") {
    perso.classList.add('animation');
   }
   setTimeout(function(){
    perso.classList.remove('animation');
   },500)
}

// To verify if the obstacle touches the image

var verification = setInterval(function(){
   var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"))
   var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))
   if(obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130){
     obstacles.style.animation = "none";
     alert("You have lost")
   }
}, 1)