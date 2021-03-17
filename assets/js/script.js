
var openedCardCount = 0
var openedCards = []
var amountFlips = 0
var amount = 0

const steps = document.getElementById('steps')

/*Clicking level buttons*/

$(".btn-level").click(function(){
    console.log("gamewindow")
    $(".menu-page").removeClass("d-block")
    $(".menu-page").addClass("d-none")
    $(".game-window").removeClass("d-none")
    $(".game-window").addClass("d-block")
    $("#playWindow").modal("hide")
    amount = $(this).attr("difficulty")
    showCards(amount)
    startTimer()
    amountFlips = 0
    var nameLevel = $(this).text()
    steps.innerHTML = " Steps: " + amountFlips
    level.innerHTML = " Level: " + nameLevel
})

$(".btn-restart").click(function(){
    console.log("restart")
    $(".menu-page").removeClass("d-none")
    $(".menu-page").addClass("d-block")
    $(".game-window").removeClass("d-block")
    $(".game-window").addClass("d-none")
    $("#gameEnd").modal("hide")
    $("#playWindow").modal("show")
    stopTimer()
})

$(".btn-mainmenu").click(function(){
    console.log("mainmenu")
    $(".menu-page").removeClass("d-none")
    $(".menu-page").addClass("d-block")
    $(".game-window").removeClass("d-block")
    $(".game-window").addClass("d-none")
    $("#gameEnd").modal("hide")
})

/*Flipping game cards*/


$(".card").on('click','.back-side', function() {
    if (openedCardCount<2) {
        $(this).hide();
        $(this).next(".front-side").css("display", "inline-block").addClass("visible");
        openedCardCount=openedCardCount+1
        amountFlips = amountFlips+1
        steps.innerHTML = " Steps: " + amountFlips 

        selectedImageURL = $(this).next(".front-side").find("img").attr("src")
        openedCards.push(selectedImageURL)

        console.log(openedCards,openedCardCount)

        if (openedCardCount == 2) {
            if(openedCards[0] != openedCards[1]) {
               setTimeout(function () {
                $(".back-side").show();
                $(".front-side").not('.matched').hide().removeClass("visible");
                console.log("COMPARE CARDS")
                openedCardCount = 0
                }, 1000);
            }  else if (openedCards[0] == openedCards[1]) {
               $(".visible").addClass("matched")
               $(".matched").prev(".back-side").removeClass("back-side")
                console.log("matchedCards")
                openedCardCount = 0
               
/*Open window with the end*/
                  var numItems = $('.matched').length
                  if (numItems == amount*2) {
                      console.log("endGame")
                      $("#gameEnd").modal("show")
                      stopTimer()
                  }
                  console.log("numItems: "+numItems + "  amount: " + amount)
                  if (min==0){
                      timeResult.innerHTML = sek + " seconds ";
                  } else {
                      timeResult.innerHTML = min +" minutes " + sek + " seconds ";
                  }
                  stepsResult.innerHTML = amountFlips + " steps";
            }
            openedCards = []
        }
    }

});


/*Timer in the game */
const timer = document.getElementById('timerStart');

var min = 0;
var sec = 0;
var sek
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
    sek = sec

    setTimeout("timerCycle()", 1000);
  }
}

