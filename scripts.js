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

}); //End document ready function
