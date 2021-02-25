const title = document.getElementById("title");
const games = document.getElementById("games");

games.addEventListener("click", getGame)

// function getGame() {
//     console.log("it worked!")
// }

function getGame() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
            // console.log(data)
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function appendData(data) {
        var mainContainer = document.getElementById("title");
        for (var i = 0; i <data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = "Title: " + data[i].title;
            mainContainer.appendChild(div);
        }
    }
}