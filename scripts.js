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

}); //End document ready function
