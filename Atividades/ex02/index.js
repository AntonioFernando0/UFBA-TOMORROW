let notas1 = document.getElementsByClassName("nota1");
let notas2 = document.getElementsByClassName("nota2");
let notas3 = document.getElementsByClassName("nota3");


let medias = [];

for (let i = 0; i < notas1.length; i++) {
    let n1 = parseFloat(notas1[i].textContent);
    let n2 = parseFloat(notas2[i].textContent);
    let n3 = parseFloat(notas3[i].textContent);

    let media = ((n1 + n2 + n3) / 3).toFixed(2);
    medias.push(media);
}

alert("Médias dos alunos:\n" + medias.join("\n"));