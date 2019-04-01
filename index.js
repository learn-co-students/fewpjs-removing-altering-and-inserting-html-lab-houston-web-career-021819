let element = document.querySelector('main');
element.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerText = "YOUR-NAME is the champion"
document.appendChild(newHeader);