const title = document.getElementById("title");
const games = document.getElementById("games");

games.addEventListener("click", getGame)

function getGame() {
    fetch('https://zelda-api.apius.cc/api/games?limit=1')
        .then(res => res.json())
        .then(data => {
            title.innerHTML = "SUCCESS";
        })
}