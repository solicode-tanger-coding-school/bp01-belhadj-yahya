

let mainContainer = document.querySelector('.main');


mainContainer.addEventListener('click', function(event) {

    if (event.target.tagName === 'BUTTON' && event.target.id.endsWith('-like')) {
        let likeElement = event.target.nextElementSibling; 
        let currentLikes = parseInt(likeElement.innerText) || 0; 
        currentLikes++; 
        likeElement.innerText = currentLikes + " like" + (currentLikes !== 1 ? "s" : ""); 
    }
});


