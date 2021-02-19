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

function ShowCards(cardAmount) {
    console.log("show cards")
    var el = document.getElementById("cards");
    el.innerHTML = "";

    getCards(cardAmount, function(data) {
        data = data.message;
        console.log(data)
        
        data.forEach(function(item) {
            el.innerHTML += item + " ";
        });
        
    });
}