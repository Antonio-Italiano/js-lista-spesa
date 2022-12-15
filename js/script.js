// elementi Dom
const listaElement = document.getElementById ('lista');

// lista spesa 
const shoppingList = ['pane', 'salsiccia', 'carbone', 'spirito'];

let i = 0;
let listPrint = '';

listaElement.innerText = shoppingList[i] ;
while (i < shoppingList.length) {
    listPrint += `<div>${shoppingList[i]}</div>`;
    console.log(shoppingList[i]);    
    i++;
}

listaElement.innerHTML = listPrint;