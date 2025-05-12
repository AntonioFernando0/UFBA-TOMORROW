let contador = document.getElementById("contador");

function decrementar(){
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual - 1;

}

function zerar(){
    contador.innerText = 0;
}

function aumentar(){
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
}
// Criando uma lista de forma dimanica
  // Array com os nomes
  const nomes = ['Junior', 'Antonio', 'Pedro', 'João'];

  // Seleciona a ul
  const lista = document.getElementById('minhaLista');

  // Percorre o array e cria os <li> dinamicamente
  nomes.forEach(nome => {
      const item = document.createElement('li'); // Cria o <li>
      item.textContent = nome;                  // Adiciona o texto
      lista.appendChild(item);                  // Insere na lista
  });