const itemInput = document.getElementById("item-input");
const button = document.getElementById("button");
const ulItems = document.getElementById("ulitems");
const liButtons = document.getElementsByClassName("remover");
const criaElemento = () => {
    if(itemInput.value === '') return;
    const li = document.createElement("li");
    const buttonLi = document.createElement("button")
    buttonLi.innerHTML = 'X';
    buttonLi.className = "remover";
    li.appendChild(buttonLi);
    li.innerHTML += itemInput.value;
    ulItems.appendChild(li);
    itemInput.value = '';
    liButtonEvents()
}

function deleteItem() {
    this.parentElement.remove();
};
function liButtonEvents() {
    for(i = 0; i < liButtons.length; i++){
        liButtons[i].addEventListener("click", deleteItem);
    }
}
liButtonEvents()
button.addEventListener("click", criaElemento);
const submit = (e) => {if(e.keyCode === 13) criaElemento()};
