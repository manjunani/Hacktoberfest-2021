alert("gxuagskxius");
prompt("Enter your name");

var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

$(".btn").click(function(){
    var userChoosenColour=$(this).attr("id");
    userClickedPattern=push.(userChoosenColour);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
});



function nextSequence(){
  var randomNumber=Math.random();
  randomNumber*=4;
  randomNumber=Math.floor(randomNumber);
  var randomChoosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChoosenColour);
  $("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColour);

}




function playSound(name){

  // var soundSource="sounds/" + name + ".mp3";
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
