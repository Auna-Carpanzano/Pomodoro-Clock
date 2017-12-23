$(document).ready(function () {
  var alarm = $("#alarm")[0];
  var breakCount = parseInt($("#breakNum").html());
  var sessionCount = parseInt($("#sessionNum").html());

  //Break buttons
  $("#breakMinus").click(function () {
    if(breakCount > 1) {
      breakCount = breakCount - 1;
      $("#breakNum").html(breakCount);
    }
  });

  $("#breakPlus").click(function () {
    breakCount = breakCount + 1;
    $("#breakNum").html(breakCount);
  });

  //Session buttons
  $("#sessionMinus").click(function () {
    if(sessionCount > 1) {
      sessionCount = sessionCount - 1;
      $("#sessionNum").html(sessionCount);
    }
  });

  $("#sessionPlus").click(function () {
    sessionCount = sessionCount + 1;
    $("#sessionNum").html(sessionCount);
  });

  //Reset button before start
  $("#reset").click(function () {
    sessionCount = 25;
    breakCount = 5;
    $("#sessionNum").text(sessionCount);
    $("#breakNum").text(breakCount);
  });

  //Start button
  $("#start").click(function () {
    sessionCount = sessionCount * 60;
    breakCount = breakCount * 60;
    var counter= setInterval(timer, 1000);

    function timer () {
      $("#start, #sessionMinus, #sessionPlus, #breakPlus, #breakMinus, #breakNum, #sessionTitle, #breakTitle").hide();
      //Allow timeType to show again after reset
      $("#timeType").show();
      $("#timeType").html("Session time: ");
      //Formats sessionCount to minutes:seconds
      if (sessionCount%60 >= 10) {
        $("#sessionNum").html(Math.floor(sessionCount/60)+":"+sessionCount%60);
      }
      else {
        $("#sessionNum").html(Math.floor(sessionCount/60)+":"+"0"+sessionCount%60);
      }
      sessionCount = sessionCount - 1;
      if (sessionCount===0) {
        alarm.play();
        clearInterval(counter);
        $("#sessionNum").hide();
        var startBreak = setInterval(breakTime, 1000);
      } //End if

      function breakTime () {
        //Allow timeType to show again after reset
        $("#timeType").show();
        $("#timeType").html("Break time: ");
        $("#breakNum").show();
        breakCount = breakCount - 1;
        if (breakCount===0) {
          clearInterval(startBreak);
          alarm.play();
          $("#breakNum, #timeType").hide();
        } //End if
        //Format breakCount to minutes:seconds
        if (breakCount%60 >= 10) {
          $("#breakNum").html(Math.floor(breakCount/60)+":"+breakCount%60);
        }
        else {
          $("#breakNum").html(Math.floor(breakCount/60)+":"+"0"+breakCount%60);
        }
      } //End breakTime function

      //Reset button after start is pressed
      $("#reset").click(function(){
        clearInterval(counter);
        clearInterval(startBreak);
      });
    } //End timer function
  }); //End start button

}); //End document ready function
