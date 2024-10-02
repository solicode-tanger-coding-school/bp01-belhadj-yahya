
let mainContainer = document.querySelector('.main');
const formattedDate = new Date().toLocaleString(); 
console.log(formattedDate)

mainContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.id.endsWith('-like')) {
        let likeElement = event.target.nextElementSibling; 
        let currentLikes = parseInt(likeElement.innerText) || 0; 
        currentLikes++; 
        likeElement.innerText = currentLikes + " like" + (currentLikes !== 1 ? "s" : ""); 
    }
});
// yahya explain :
// i used addEventListener so that when aver a click happened we inter and check the conditions
mainContainer.addEventListener('click', function(event) {
//condition we need the target need that his tag name be 'Button' and start with 'add'
    if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('add')) {
//if it true we will tick previousElementSibling value and gave it to commentElement
        let commentElement = event.target.previousElementSibling.value; 
//here we createElement 'p' and save it in newele
         let newele = document.createElement("p")
//here we gave the newele his value wich is commentElement and formattedDate
         newele.innerHTML =`${commentElement} <br> ${formattedDate}`  
// here we use the insertAdjacentElement that consfirm where the newele will be in this case after the targit button
         event.target.insertAdjacentElement('afterend', newele);
// this is just for styling the comments
         newele.style.backgroundColor = '#f0f0f0';
         newele.style.border = "2px solid black"
        newele.style.padding = '10px'; 
        newele.style.borderRadius = '5px'; 
        newele.style.marginTop = '5px'; 
 }
});
// i did get some help from chatgpt unfortunately :(
// the design is soo bad to i didnt work on it much sorry the js code killed me thats why

