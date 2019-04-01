function deleteMain() {
    let main = document.querySelector('main');
    main.remove();
}

deleteMain();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerText = "Jack is the champion"
document.body.appendChild(newHeader);
