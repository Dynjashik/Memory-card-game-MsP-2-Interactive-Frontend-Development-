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

function showCards(cardAmount) {
    console.log("show cards")
    var el = document.getElementById("cards");
    el.innerHTML = "";

    getCards(cardAmount, function(data) {
        data = data.message;
        console.log(data)
        
        var backCard = "<div class = \"back-side card-side\"><img src=\"assets/images/dog-logo.png\" width=\"150\", height=\"150\"></div>"

        data.forEach(function(item) {
            var frontCard = "<div class = \"front-side card-side \" ><img src=\""+ item + "\" width=\"150\", height=\"150\"></div>"
            el.innerHTML += backCard + frontCard;
        });
        data.forEach(function(item) {
            var frontCard = "<div class = \"front-side card-side \"><img src=\""+ item + "\" width=\"150\", height=\"150\"></div>"
            el.innerHTML += backCard + frontCard;
        });
    });
}
