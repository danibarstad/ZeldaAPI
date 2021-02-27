const games = document.getElementById("games");

const main = document.getElementById('main');
const container = document.createElement('div');
container.setAttribute('class', 'container')
main.appendChild(container);

games.addEventListener("click", getGame)

function getGame() {
    fetch('https://zelda-api.apius.cc/api/games')
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
        function appendData(data) {
            data = data.data;
            data.forEach(game => {
                console.log(game.name);
                console.log(game.description)
                // console.log(game);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = game.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                game.description = game.description.substring(0, 300);
                p.textContent = `${game.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}