// variable that we need
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// functions to initialize the variable once the page is loaded
window.onload = function(){
  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('start');
  btn_stop = document.getElementById('stop');
  t;
  ms = 0, s = 0, mn = 0, h = 0;
}

// putting in place the counter

function update_chrono(){
  ms+=1;
  if(ms == 10){
     ms = 1;
     s += 1
  }
  if(s == 60){
    s = 0;
    mn += 1 
  }
  if(mn == 60){
    mn = 0;
    h += 1;
  }
  // insertion of values in spans
  //[0] permits us to select the first span
  //[1] permits us to select the second span

  sp[0].innerHTML = h + "h" ;
  sp[1].innerHTML = mn + "min" ;
  sp[2].innerHTML = s + "s" ;
  sp[3].innerHTML = ms + "ms" ;
}

 // put in place the function on the start button

 function start(){
  // this function will execute the update_chrono
  // every 100 ms
  t = setInterval(update_chrono,100)
  btn_start.disabled = true
 }

  // stop the chronometer
  function stop(){
    clearInterval(t);//suppress the interval t that we have created.
    btn_start.disabled = false ;
    
  }

  // Initialize the values of the counter.
  function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms =0, s=0, mn =0, h =0;
    // inserts new values in the span
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
    
  }
