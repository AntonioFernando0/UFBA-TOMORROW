let contador = document.getElementsByClassName("inicio")[0];

function aumentar() {
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
}

function diminuir() {
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual - 1;
}

function zerar() {
    contador.innerText = 0;
}
