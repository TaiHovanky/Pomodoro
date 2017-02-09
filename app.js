$(document).ready(function(){
  var workInterval = 25;
  var breakInterval = 5;
  var seconds = 60;
  var minutes = workInterval - 1;
  var counter = (workInterval-1) * 60;
  var breakCounter = breakInterval*60;
  var run;
  var isBreak = false;
  $("#clockface").html(workInterval + ":" + 00);
  $("#workTime").html(workInterval);
  $("#breakTime").html(breakInterval);
  
  function secondCountdown(){
    if(seconds > 0){
      seconds = seconds - 1; //while the second count is higher than 0, the value of seconds decreases
      $("#clockface").html(minutes + ":" + seconds);
      counter = counter - 1; //the counter decreases as each second decreases
      if (isBreak === true){
        breakCounter = breakCounter-1; //the isBreak variable becomes true whenever the main work interval countdown hits 0. When this happens, break counter decreases every second.
      }
    } else {
      minutes = minutes - 1; //when the seconds hits 0, the minutes decreases by 1
      seconds = 60; //the number of seconds resets to 60 again
    }
    if(counter === 0){ //this runs when the counter hits 0, meaning the work interval has stopped
      minutes = breakInterval - 1; //resets the value of the minutes to breakInterval
      seconds = 60;
      isBreak = true;
      clearInterval(run);
      alert("Break time!")
      countdown();
    }
    if(breakCounter === 0){ //once the break counter hits 0, the break has finished
      clearInterval(run); //stops the interval when break ends
      isBreak = false;
      alert("Break's over!");
    }
  }
  
  function countdown(){  
    run = setInterval(secondCountdown, 1000); //causes the secondCountdown function to run every second
  }
  
  $("#start").click(function(){
    //alert(counter);
    countdown();
  })
  
  $("#pause").click(function(){
    clearInterval(run); //pauses the interval
    //alert(counter);
  })
  
  $("#reset").click(function stop(){
    clearInterval(run); //stops the interval
    minutes = workInterval-1;
    counter = workInterval * 60; //resets the breakCounter to the number seconds in the break interval
    breakCounter = breakInterval * 60; //resets the breakCounter to the number seconds in the break interval
    seconds = 59;
    isBreak = false;
    $("#clockface").html(workInterval + ":" + 00); //displays the reset values for minutes and seconds
  })
  
  $("#minus").click(function(){
    workInterval = workInterval - 1; //starts the minutes to start at 24:59 instead of 25:59
    counter = workInterval * 60;
    minutes = workInterval-1;
    $("#clockface").html(workInterval + ":" + 00); //displays the work interval on the clock face
    $("#workTime").html(workInterval); //displays the work interval
    return workInterval;
  });
  
  $("#plus").click(function(){
    workInterval = workInterval + 1; //starts the minutes to start at 24:59 instead of 25:59
    minutes = workInterval-1;
    counter = workInterval * 60;
    $("#clockface").html(workInterval + ":" + 00); //displays the work interval on the clock face
    $("#workTime").html(workInterval);
    return workInterval;
  });
  
  $("#minusBreak").click(function(){
    breakInterval = breakInterval - 1;
    //minutes = breakInterval - 1;
    breakCounter = breakInterval * 60;
    $("#breakTime").html(breakInterval);
    return breakInterval;
  });
  
  $("#plusBreak").click(function(){
    breakInterval = breakInterval + 1;
    //minutes = breakInterval - 1;
    breakCounter = breakInterval * 60;
    $("#breakTime").html(breakInterval);
    return breakInterval;
  });
});