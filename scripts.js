const title = document.getElementById("title");
const games = document.getElementById("games");

games.addEventListener("click", getGame)

function getGame() {
    console.log("it worked!")
}

// function getGame() {
//     fetch('https://zelda-api.apius.cc/api/games')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             appendData(data);
//         })
//         .catch(function (err) {
//             console.log('error: ' + err);
//         });
//     function appendData(data) {
//         var mainContainer = document.getElementById("title");
//         for (var i = 0; i <data.length; i++) {
//             var div = document.createElement("div");
//             div.innerHTML = "Title: " + data[i].name;
//             mainContainer.appendChild(div);
//         }
//     }
// }

// async function getGame(url = '') {
//     const response = await fetch(url, {
//         method: 'GET',
//         mode: 'no-cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer'
//     });
//     return response.json();
// }

// getGame('https://zelda-api.apius.cc/api/games')
//     .then(data => {
//         console.log(data);
//     })