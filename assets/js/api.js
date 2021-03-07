const baseURL = "https://dog.ceo/api/breeds/image/random/";

function getCards(cardAmount, writeCards) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            writeCards(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + cardAmount);
    xhr.send();
}

var imagesArray = []

function showCards(cardAmount) {
    console.log("show cards")
    var el = document.getElementById("cards");
    el.innerHTML = "";

    getCards(cardAmount, function(data) {
        data = data.message;
        
        var backCard = "<div class = \"back-side card-side\"><img src=\"assets/images/dog-logo.png\" width=\"150\", height=\"150\"></div>"

        data.forEach(function(item) {
            var frontCard = "<div class = \"front-side card-side \" ><img src=\""+ item + "\" width=\"150\", height=\"150\"></div>"
            imagesArray.push(frontCard)
            imagesArray.push(frontCard)
        });

        imagesArray = shuffle(imagesArray)
        console.log("!! " + imagesArray)
        for (i in imagesArray) {
            el.innerHTML += backCard + imagesArray[i]
        }

    }); 
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}