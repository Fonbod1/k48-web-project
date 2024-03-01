var addToDoButton = document.getElementById('addtoDo');
var toDocontainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function() {
  //alert('You have clicked on the +')
  // verify if the input is not empty
   if(inputField.value != ""){
    // if input is not empty, create a paragraphe
    var paragraphe = document.createElement('p')
   }
   // valorise the paragraphe with the content of the input
   paragraphe.innerText = inputField.value;

   //style the paragraph
   paragraphe.classList.add('paragraphe_style')

   //insert the paragraph in the toDoContainer element
    toDoContainer.appendChild(paragraphe);

    // empty the input when the paragraph has been added
     inputField.value = "";

     // barr the paragraph when we click under
     paragraphe.addEventListener('click', function(){
      //alert('You have clicked on the paragraph')
      paragraphe.classList.add('paragraph_click');
     })
     //deleting task on double clicking on it.
     paragraphe.addEventListener('dblclick', function(){
       toDoContainer.removeChild(paragraphe);
    })
}
