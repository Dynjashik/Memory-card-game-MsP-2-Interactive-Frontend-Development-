var openedCardCount = 0;
var openedCards = [];
var amountFlips = 0;
var amount = 0;

var steps = document.getElementById('steps');

/*Clicking level buttons*/

$(".btn-level").click(function () {
    $(".menu-page").removeClass("d-block");
    $(".menu-page").addClass("d-none");
    $(".game-window").removeClass("d-none");
    $(".game-window").addClass("d-block");
    $("#playWindow").modal("hide");
    amount = $(this).attr("data-difficulty");
    showCards(amount);
    amountFlips = 0;
    var nameLevel = $(this).text();
    steps.innerHTML = " Steps: " + amountFlips;
    level.innerHTML = " Level: " + nameLevel;
});

$(".btn-restart").click(function () {
    $(".menu-page").removeClass("d-none");
    $(".menu-page").addClass("d-block");
    $(".game-window").removeClass("d-block");
    $(".game-window").addClass("d-none");
    $("#gameEnd").modal("hide");
    $("#playWindow").modal("show");
    timer.innerHTML = "Time: 00:00";
    stopTimer();
});

$(".btn-mainmenu").click(function () {
    $(".menu-page").removeClass("d-none");
    $(".menu-page").addClass("d-block");
    $(".game-window").removeClass("d-block");
    $(".game-window").addClass("d-none");
    $("#gameEnd").modal("hide");
    timer.innerHTML = "Time: 00:00";
    stopTimer();
});

/*Flipping game cards, flips amounter*/

$(".card").on('click', '.back-side', function () {
    if (amountFlips == 0) {
        startTimer();
    }
    if (openedCardCount < 2) {
        $(this).hide();
        $(this).next(".front-side").css("display", "inline-block").addClass("visible");
        openedCardCount = openedCardCount + 1;
        amountFlips = amountFlips + 1;
        steps.innerHTML = " Steps: " + amountFlips;

        selectedImageURL = $(this).next(".front-side").find("img").attr("src");
        openedCards.push(selectedImageURL);

        if (openedCardCount == 2) {
            if (openedCards[0] != openedCards[1]) {
                setTimeout(function () {
                    $(".back-side").show();
                    $(".front-side").not('.matched').hide().removeClass("visible");
                    openedCardCount = 0;
                }, 1000);
            } else if (openedCards[0] == openedCards[1]) {
                $(".visible").addClass("matched");
                $(".matched").prev(".back-side").removeClass("back-side");
                openedCardCount = 0;

                /*Openning modal window with game results*/

                var numItems = $('.matched').length;
                if (numItems == amount * 2) {
                    $("#gameEnd").modal("show");
                    stopTimer();
                }
                if (finalMin < 1) {
                    timeResult.innerHTML = finalSec + " seconds ";
                } else {
                    timeResult.innerHTML = finalMin + " minutes " + finalSec + " seconds ";
                }
                stepsResult.innerHTML = amountFlips + " steps";

            }
            openedCards = [];
        }
    }

});

/*Timer in the game from the external source: https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak*/

const timer = document.getElementById('timerStart');

var min = 0;
var sec = 0;
var finalSec;
var finalMin;
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
        finalSec = sec;
        finalMin = min;
        sec = 0;
        min = 0;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        sec = sec + 1;

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

        timer.innerHTML = "Time: " + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}
