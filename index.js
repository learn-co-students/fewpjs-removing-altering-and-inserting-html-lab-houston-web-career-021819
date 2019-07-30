// Write your code here!

document.querySelector('#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerText = "Zoe is the champion";
document.body.appendChild(newHeader);