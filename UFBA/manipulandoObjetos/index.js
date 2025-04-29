const botaoAdicionar = document.getElementById("buttonAdicionar");
const botaoConsultar = document.getElementById("buttonConsultar");
const botaoExcluir = document.getElementById("buttonExcluir");
const botaoAlterar = document.getElementById("buttonAlterar");

// Array de objetos para representar várias pessoas
let pessoas = [
    { nome: "João", idade: 30, profissao: "Desenvolvedor" },
    { nome: "Maria", idade: 25, profissao: "Designer" },
    { nome: "Carlos", idade: 35, profissao: "Engenheiro" }
];

// Obtendo elementos HTML para inputs
let nomeInput = document.getElementById('nomeInput');
let idadeInput = document.getElementById('idadeInput');
let profissaoInput = document.getElementById('profissaoInput');
let infoElement = document.getElementById('info');

// Função para adicionar uma nova pessoa ao array
function adicionarPessoa() {
    // Obtendo valores dos inputs
    let novoNome = nomeInput.value;
    let novaIdade = parseInt(idadeInput.value);
    let novaProfissao = profissaoInput.value;

    // Validando se todos os campos foram preenchidos
    if (novoNome && novaIdade && novaProfissao) {
        // Adicionando uma nova pessoa ao array
        pessoas.push({ nome: novoNome, idade: novaIdade, profissao: novaProfissao });

        // Atualizando a exibição na página
        exibirPessoas();

        // Limpando os inputs
        nomeInput.value = '';
        idadeInput.value = '';
        profissaoInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
// função para consultar pessoas
function consultarPessoa() {
    let nomeConsultado = nomeInput.value;
    let pessoaEncontrada = pessoas.find(pessoa => pessoa.nome === nomeConsultado);
    if (pessoaEncontrada) {
        idadeInput.value = pessoaEncontrada.idade;
        profissaoInput.value = pessoaEncontrada.profissao;
    }
    else {
        alert("Registro não encontrado!");
        nomeInput.value = '';
        idadeInput.value = '';
        profissaoInput.value = '';
    }
}

function excluirPessoa() {
    let nomeConsultado = nomeInput.value;
    if (nomeConsultado) {
        let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome === nomeConsultado);
        if (pessoaIndice >= 0) {
            pessoas.splice(pessoaIndice, 1);
            exibirPessoas();
        }
    }
    else {
        alert("Parâmetro de pesquisa não informado.")
    }

}

function alterarPessoa() {
    let nomeConsultado = nomeInput.value;
    let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome === nomeConsultado);
    if (pessoaIndice >= 0) {
        pessoas[pessoaIndice].idade = idadeInput.value;
        pessoas[pessoaIndice].profissao = profissaoInput.value;
        console.log(pessoaIndice);
        exibirPessoas()
    }
}
// Função para exibir as pessoas na página
function exibirPessoas() {
    // Limpando o conteúdo anterior
    infoElement.innerHTML = '';

    // Usando um loop for para percorrer todas as pessoas no array
    for (let i = 0; i < pessoas.length; i++) {
        // Criando elementos para exibir as informações sobre cada pessoa
        let pessoaElement = document.createElement('div');

        pessoaElement.innerHTML = "<p>Nome: " + pessoas[i].nome + "</p>";
        pessoaElement.innerHTML += "<p>Idade: " + pessoas[i].idade + "</p>";
        pessoaElement.innerHTML += "<p>Profissão: " + pessoas[i].profissao + "</p>";
        pessoaElement.innerHTML += "<hr>";


        // Adicionando o elemento criado ao elemento pai
        infoElement.appendChild(pessoaElement);
    }
}



// Exibindo as pessoas na página ao carregar
exibirPessoas();

botaoAdicionar.addEventListener("click", adicionarPessoa);
botaoConsultar.addEventListener("click", consultarPessoa);
botaoExcluir.addEventListener("click", excluirPessoa);
botaoAlterar.addEventListener("click", alterarPessoa);