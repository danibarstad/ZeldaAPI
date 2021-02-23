const title = document.getElementById("title");
const games = document.getElementById("games");

games.addEventListener("click", getGame)

function getGame() {
    fetch('https://zelda-api.apius.cc/api/games')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function appendData(data) {
        var mainContainer = document.getElementById("title");
        for (var i = 0; i <data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = "Title: " + data[i].name;
            mainContainer.appendChild(div);
        }
    }
}