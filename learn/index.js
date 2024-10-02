let moroccoP = document.getElementById("morocco");
let likeMorocco = document.getElementById("morocco-like")

let italyP = document.getElementById("italy");
let likeItaly = document.getElementById("italy-like");

let norwayP = document.getElementById("norway");
let likeNorway = document.getElementById("norway-like");

let russiaP = document.getElementById("russia");
let likeRussia = document.getElementById("russia-like");

let turkeyP = document.getElementById("Turkey");
let likeTurkey = document.getElementById("Turkey-like");

let mainContainer = document.querySelector('.main');


mainContainer.addEventListener('click', function(event) {

    if (event.target.tagName === 'BUTTON' && event.target.id.endsWith('-like')) {
        let likeElement = event.target.nextElementSibling; 
        let currentLikes = parseInt(likeElement.innerText) || 0; 
        currentLikes++; 
        likeElement.innerText = currentLikes + " like" + (currentLikes !== 1 ? "s" : ""); 
    }
});


