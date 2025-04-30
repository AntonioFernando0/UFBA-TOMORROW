let alunos =  [

    {nome: "Ana", matricula: 123, nota: 8}, 
    {nome: "Pedro", matricula: 543, nota: 3},
    {nome: "Antonio", matricula: 10, nota: 8},
];

for (let i = alunos.length-1; i >= 0; i-- ){

    total = total + alunos[i].nota;
}

let media = total/alunos.length;

console.log("A média da turma é ", media.toFixed(2));