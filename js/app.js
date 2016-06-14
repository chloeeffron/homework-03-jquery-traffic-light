$(function(){
  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

 function illuminateRed() {
   console.log ("this is working");
   // clear whatever light is already illuminated
   clearLights();
   // illuminate red light
   $("#stopLight").css("background-color", "red");
 }

 function illuminateYellow() {
   clearLights();
   $("#slowLight").css("background-color", "yellow");
 }

function illuminateGreen() {
  clearLights();
  $("#goLight").css("background-color", "green");
}

function clearLights(){
  $("#stopLight").css("backgroundColor", "black");
  $("#slowLight").css("backgroundColor", "black");
  $("#goLight").css("backgroundColor", "black");
}

});