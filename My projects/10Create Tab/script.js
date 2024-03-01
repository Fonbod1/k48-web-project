function openOnglet(evt , name){
   //alert('You have click on a button')
   var i , tabcontent , tablinks;
   tabcontent = document.getElementsByClassName('tabcontent')
   for(i = 0; i <tabcontent.length; i++){
      tabcontent[i].style.display = "none"; 
   }
   tablinks = document.getElementsByClassName('tablinks');
   /*for(i = 0; i <tablinks.length; i++){
      tabcontent[i].style.display = "none"; 
    }*/
    for(i = 0; i <tablinks.length; i++){
      tablinks[i].className = tablinks[i].className.replace(" active",""); 


    }
     document.getElementById(name).style.display = "block";
     evt.currentTarget.className += " active";
}
