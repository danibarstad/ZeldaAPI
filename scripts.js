// const reset = document.getElementById("reset");
const games = document.getElementById("games");
const characters = document.getElementById("characters");
const monsters = document.getElementById("monsters");
const bosses = document.getElementById("bosses");
const dungeons = document.getElementById("dungeons");
const places = document.getElementById("places");
const items = document.getElementById("items");

const main = document.getElementById('main');
let container;

// reset.addEventListener("click", clearPage)
games.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('games');
});
characters.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('characters');
});
monsters.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('monsters');
});
bosses.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('bosses');
});
dungeons.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('dungeons');
});
places.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('places');
});
items.addEventListener("click", () => {
    clearPage();
    createContainer();
    getData('items');
});

function createContainer() {
    container = document.createElement('div');
    container.setAttribute('class', 'container')
    main.appendChild(container);
}

function clearPage() {
    if (container) {
        container.parentNode.removeChild(container);
    }
}

function getData(objStr) {
    fetch(`https://proxy-server-69420.herokuapp.com/https://zelda-api.apius.cc/api/${objStr}`)
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
            data.forEach(obj => {
                console.log(obj.name);
                console.log(obj.description)
                // console.log(game);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = obj.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                obj.description = obj.description.substring(0, 300);
                p.textContent = `${obj.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}