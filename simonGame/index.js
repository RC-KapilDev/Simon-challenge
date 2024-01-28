var color = ['green','red','yellow','blue'];
var level = 0;
var gamePattern = [];
var userPattern = [];
var start = false;


$('#start-btn').on('click',function(){
    if(!start){
        sequence();
     
        start = true;
    }
        
    }
);

$('.btn').click(
    function(){
        var userChoosed = $(this).attr('id');
        userPattern.push(userChoosed);
        playSound(userChoosed);
        animatePress(userChoosed);
        checkAnswer(userPattern.length-1);
    }
);


function checkAnswer(currentlevel){
    if(userPattern[currentlevel]===gamePattern[currentlevel]){
    if(userPattern.length === gamePattern.length){
        setTimeout(function(){
            sequence();
        },1000)
    }
}
    else{
        playSound('wrong');
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Start Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          startOver();
    }
}


function animatePress(color){
    $('#'+color).addClass('pressed');
    setTimeout(function(){
        $('#'+color).removeClass('pressed');
    },100);
  
}

function sequence(){
    userPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var generatedPattern = color[randomNumber];
    gamePattern.push(generatedPattern);
    $('#'+ generatedPattern).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(generatedPattern);

}



function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
  }
