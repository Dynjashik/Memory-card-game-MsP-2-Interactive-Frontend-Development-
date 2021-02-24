
/*Clicking level buttons*/

$(".btn-level").click(function(){
    console.log("gamewindow")
    $(".menu-page").removeClass("d-block")
    $(".menu-page").addClass("d-none")
    $(".game-window").removeClass("d-none")
    $(".game-window").addClass("d-block")
    $("#playWindow").modal("hide")
    var amount = $(this).attr("difficulty")
    showCards(amount)
    startTimer()
})

$(".btn-restart").click(function(){
    console.log("restart")
    $(".menu-page").removeClass("d-none")
    $(".menu-page").addClass("d-block")
    $(".game-window").removeClass("d-block")
    $(".game-window").addClass("d-none")
    $("#playWindow").modal("show")
    stopTimer()
})

/*Flipping game cards*/

var openedCardCount = 0

$(".card").on('click','.back-side', function() {
    console.log("flip card")
    $(this).hide();
    $(this).next(".front-side").css("display", "inline-block");
    openedCardCount=openedCardCount+1
    console.log(openedCardCount)

    if (openedCardCount == 2) {
        setTimeout(function () {
            $(".back-side").show();
            $(".front-side").hide();
            openedCardCount = 0
            console.log("toggle cards")
        }, 1500);

    }
});



/*Timer and steps in the game */
const timer = document.getElementById('timerStart');

var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    sec = 0;
    min = 0;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    sec = sec + 1;
    console.log("cycle")

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = "Time: "  + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}