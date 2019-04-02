
// Write your code here!
var newHeader = document.createElement('h1')
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerText = "Bobby is the champion";
var removeMain = document.querySelector("#main");
removeMain.remove();