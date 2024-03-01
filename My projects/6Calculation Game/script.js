var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0 ; 

//Number alocated at the beginning of the game

random1 = Math.random()*11 << 0; // To generate the numbers btn 0 and 11
//console.log(random1)
random2 = Math.random()*11 << 0; // To generate the numbers btn 0 and 11
console.log(random1);
console.log(random2);
// to insert harp hazard numbers in the variables nb1 and nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

// Verification Function

function verifier(){
  //alert("ca marche")
  // Retrive the result entered by the player
  var res = document.querySelector('.res').value;
  //alert(res)
  if(random1 + random2 == res){
    Message.style.background = "green";
    Message.innerHTML = "Correct"
    // Create other numbers randomly
       //Number alocated at the beginning of the game

      random1 = Math.random()*11 << 0; // To generate the numbers btn 0 and 11
      //console.log(random1)
      random2 = Math.random()*11 << 0; // To generate the numbers btn 0 and 11
      console.log(random1);
      console.log(random2);
      // to insert harp hazard numbers in the variables nb1 and nb2
      nb1.innerHTML = random1;
      nb2.innerHTML = random2;
      compteur = compteur + 1


  }
  else{
       Message.style.background = "red";
       Message.innerHTML = "You have lost"
       section.innerHTML = "";
       score.innerHTML = `<span>${compteur}</span></br> Score`//(Attention ! this sign is given by the combination of ALTGR + 7 alphanumeric)
      link.style.display = "block" 
  }
}