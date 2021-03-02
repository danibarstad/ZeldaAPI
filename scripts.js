const r = document.getElementById("r");
const games = document.getElementById("games");
const characters = document.getElementById("characters");
const monsters = document.getElementById("monsters");
const bosses = document.getElementById("bosses");
const dungeons = document.getElementById("dungeons");
const places = document.getElementById("places");
const items = document.getElementById("items");

const main = document.getElementById('main');

let container;
// r.addEventListener("click", clearPage)
games.addEventListener("click", getGame);
characters.addEventListener("click", getCharacter);
monsters.addEventListener("click", getMonster);
bosses.addEventListener("click", getBoss);
dungeons.addEventListener("click", getDungeon);
places.addEventListener("click", getPlace);
items.addEventListener("click", getItem);


// function createContainer() {
    // const container = document.createElement('div');
    // container.setAttribute('class', 'container')
    // main.appendChild(container);
// }

// function clearPage() {
//     if (container) {
//         container.parentNode.removeChild(container);
//     }
// }

function getGame() {
    if (container) {
        container.parentNode.removeChild(container);
    }
    document.createElement('div');
    container.setAttribute('class', 'container')
    main.appendChild(container);
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

function getCharacter() {
    fetch('https://zelda-api.apius.cc/api/characters')
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
            data.forEach(character => {
                console.log(character.name);
                console.log(character.description)
                // console.log(character);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = character.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                character.description = character.description.substring(0, 300);
                p.textContent = `${character.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}

function getMonster() {
    fetch('https://zelda-api.apius.cc/api/monsters')
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
            data.forEach(monster => {
                console.log(monster.name);
                console.log(monster.description)
                // console.log(monster);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = monster.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                monster.description = monster.description.substring(0, 300);
                p.textContent = `${monster.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}

function getBoss() {
    fetch('https://zelda-api.apius.cc/api/bosses')
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
            data.forEach(boss => {
                console.log(boss.name);
                console.log(boss.description)
                // console.log(boss);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = boss.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                boss.description = boss.description.substring(0, 300);
                p.textContent = `${boss.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}

function getDungeon() {
    fetch('https://zelda-api.apius.cc/api/dungeons')
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
            data.forEach(dungeon => {
                console.log(dungeon.name);
                console.log(dungeon.description)
                // console.log(dungeon);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = dungeon.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                dungeon.description = dungeon.description.substring(0, 300);
                p.textContent = `${dungeon.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}

function getPlace() {
    fetch('https://zelda-api.apius.cc/api/places')
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
            data.forEach(place => {
                console.log(place.name);
                console.log(place.description)
                // console.log(place);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = place.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                place.description = place.description.substring(0, 300);
                p.textContent = `${place.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}

function getItem() {
    fetch('https://zelda-api.apius.cc/api/items')
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
            data.forEach(item => {
                console.log(item.name);
                console.log(item.description)
                // console.log(item);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');
    
                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'title')
                h1.textContent = item.name;
    
                const p = document.createElement('p');
                p.setAttribute('id', 'desc')
                item.description = item.description.substring(0, 300);
                p.textContent = `${item.description}...`;
    
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            })
        }
}