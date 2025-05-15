  

function enviar() {
    let nome = document.getElementById("nome").value.trim();
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("nasc").value
    

    let soLetras = /^[A-Za-zÀ-ÿ\s]+$/

    if(nome === "" || !soLetras.test(nome)){

        alert("Erro: Por favor, digite um nome válido (somente letras)");

        return;
}

const p = document.createElement("p");
p.textContent = `Nome: ${nome}, Idade: ${idade}, Email: ${email}, Data de Nascimento: ${date}.`;
document.getElementById("container").appendChild(p);

//Limpar todos os dados.

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nasc").value = "";

}