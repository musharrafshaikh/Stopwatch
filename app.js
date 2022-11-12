/*
hr = hours
min = minutes
sec = second
ms = milisecond
*/

var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

var timer = false;


/* Grab all the necessary elements*/
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

//start button event
startBtn.addEventListener('click' ,function(e){
timer = true;
stopwatch();
});

//stop button event
stopBtn.addEventListener('click' ,function(e){
timer = false;
});

// reset button event
resetBtn.addEventListener('click' ,function(e){
timer = false;

  hr =0;
  min =0;
  sec =0;
  ms =0;

  document.getElementById("hr").innerHTML = '00';
  document.getElementById("sec").innerHTML = '00';
  document.getElementById("min").innerHTML = '00';
  document.getElementById("ms").innerHTML = '00';

});

function stopwatch(){
    if(timer == true){
        ms = ms+1;
        if(ms == 100){
            sec = sec +1;
            ms = 0;
        }

      if(sec == 60){
          min = min+1;
          sec = 0;
      }

      if(min == 60){
        hr = hr+1;
        min = 0;
        sec = 0;
      }
         
      var hrString = hr;
      var minString = min;
      var secString = sec;
      var msString = ms;

      if(hr < 10){
         hrString = "0" + hrString;
      }

      if(min < 10){
        minString = "0" + minString;
     }

     if(sec < 10){
        secString = "0" + secString;
     }

     if(ms < 10){
        msString = "0" + msString;
     }



        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("ms").innerHTML = msString;



        setTimeout("stopwatch()",10);

    }
}

