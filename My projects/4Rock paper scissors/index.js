const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let resultat
let choixOrdinateur

// Events 'when the button is click'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
  // recover the id of the button that has been click
  //alert(e.target.id)
  choixUtilisateur = e.target.id;
  // add the image of the corresponding choice
  contenantChoixUtilisateur.innerHTML = `<img src = "${choixUtilisateur}.png">`
   generer_choix_ordinateur();
   verification()
 
}))

  // Fuction to generate the computers choice.
  function generer_choix_ordinateur() {
    random = Math.floor(Math.random() * 3) +1 // Generate the required number from 1 to 3
    if(random === 1){ // If random is 1 :
       choixOrdinateur = "pierre"
    }
    if(random === 2){ // If random is 2 :
      choixOrdinateur = "papier"
   }
   if(random === 3){ // If random is 3 :
    choixOrdinateur = "ciseaux"
   }
   // We add the image that corresponds to choix
   contenantChoixOrdinateur.innerHTML = `<img src = "${choixOrdinateur}.png">`
    
  }

   // Function to verify if the player has win or loss
    function verification() {
        if(choixUtilisateur == choixOrdinateur) {
          resultat = "Egalite !";
        }
        // The case where the player lose
        if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
          resultat = "perdu !";
        }
        if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
          resultat = "perdu !";
        }
        if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
          resultat = "perdu !";
        }
        // the case where the player win
        if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
          resultat = "Gagné !";
        }
        if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
          resultat = "Gagné !";
        }
        if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
          resultat = "Gagné !";
        }
        contenantResultat.innerHTML = resultat ;

    }

