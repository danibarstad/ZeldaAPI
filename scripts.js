// const title = document.getElementById("title");
const games = document.getElementById("games");

const main = document.getElementById('main');
const container = document.createElement('div');
container.setAttribute('class', 'container')
main.appendChild(container);

games.addEventListener("click", getGame)

// function getGame() {
//     console.log("it worked!")
// }

function getGame() {
    // fetch('https://ghibliapi.herokuapp.com/films')


    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    const myInit = {
        method: 'GET', 
        headers: myHeaders, 
        mode: 'cors', 
        cache: 'default'
    };
    fetch('https://zelda-api.apius.cc/api/games', myInit)
        .then(function (response) {
            return response;
        })
        .then(function(data) {
            // appendData(data);
            console.log(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
        // function appendData(data) {
        //     data.forEach(movie => {
        //         const card = document.createElement('div');
        //         card.setAttribute('class', 'card');
    
        //         const h1 = document.createElement('h1');
        //         h1.setAttribute('id', 'title')
        //         h1.textContent = movie.title;
    
        //         const p = document.createElement('p');
        //         p.setAttribute('id', 'desc')
        //         movie.description = movie.description.substring(0, 300);
        //         p.textContent = `${movie.description}...`;
    
        //         container.appendChild(card);
        //         card.appendChild(h1);
        //         card.appendChild(p);
        //     })
        // }
}