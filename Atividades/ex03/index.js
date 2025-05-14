  

function enviar() {
  let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("nasc").value

    let soLetras = /^[A-Za-zÀ-ÿ\s]+$/

    if(nome === "" || !soLetras.test(nome)){

        alert("Erro: Por favor, digite um nome válido (somente letras)")}else{

            alert(nome + idade + email + date)
        }
}