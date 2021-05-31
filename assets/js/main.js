function criaListaDeCompras() {
    const itemInput = document.getElementById("item-input");
    const button = document.getElementById("button");
    const ulItems = document.getElementById("ulitems");
    const liButtons = document.getElementsByClassName("remover");
    function criaLi() {return document.createElement("li")};
    function criaButtonLi() {
        const geraButtonLi = document.createElement("button")
        geraButtonLi.innerHTML = 'X';
        geraButtonLi.className = "remover";
        return geraButtonLi
    };
    function limpaInput() {
        itemInput.value = '';
        itemInput.focus();
    };
    function criaLista(texto){
        const li = criaLi();
        const buttonLi = criaButtonLi();
        li.appendChild(buttonLi)
        li.innerHTML += texto;
        ulItems.appendChild(li);
        limpaInput();
        liButtonEvents();
        salvaLista();
    };

    function salvaLista() {
        const liListas = document.querySelectorAll('li');
        const listaDeCompras = [];
        for(let lista of liListas){
            let listaTexto = lista.innerText;
            listaTexto = listaTexto.replace('X', '').trim();
            listaDeCompras.push(listaTexto);
        };
        const listaJson = JSON.stringify(listaDeCompras);
        localStorage.setItem('lista', listaJson);
    };

    function adicionaListaSalva() {
        const listas = localStorage.getItem('lista');
        const listaDeCompras = JSON.parse(listas);
        for(let lista of listaDeCompras) {
            criaLista(lista);
        };
    };

    function deleteItem() {
        this.parentElement.remove();
        salvaLista();
    };

    function liButtonEvents() {
        for(i = 0; i < liButtons.length; i++){
            liButtons[i].addEventListener("click", deleteItem);
        }
    }
    itemInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            criaLista(itemInput.value);
        };
    });
    adicionaListaSalva();
    liButtonEvents();
    button.addEventListener("click", ()=>{
        if(!itemInput.value) return;
        criaLista(itemInput.value)
    });
}

criaListaDeCompras();