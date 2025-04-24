//Arrays

let numeros = [1,2,3]
console.log(numeros[0])

// Você é um aluno e possui uma disciplina que o professor faz 2 testes
// Média = (nota1 + nota2) / 2


let nota01 = 7
let nota02 = 9;
let media = (nota01 + nota02) / 2
console.log(media)

// São estruturas de dados usadas para organizar os seus dados

let vArray = [ ];

// array de numeros pares menores ou igual a 20

let numerosPares = [2,4,6,8,10,12,14,16,18,20]

console.log(numerosPares[5]);

//arrays n elementos, mas o primeiro é o elemento 0 = está na posição 0 = indice 0
// array - reserva/ocupa um espaço na memória
//[0] - a primeira posição da memória reservada para esse array

let arrayDiversos = [7, "Meu numero da sorte", true, [1,2,3]];

console.log(arrayDiversos[1]);
console.log(arrayDiversos[0]);
console.log(arrayDiversos[2]);
console.log(arrayDiversos[3]);
console.log(arrayDiversos[3][1]);
console.log(arrayDiversos);

for(let i = 0; i < numerosPares.length; i++){
  console.log(numerosPares[i]);
}


let notas = [7, 9.5, 5];
let total = 0;
for( let i = 0; i < notas.length; i++){
  total = total + notas[i];
}
console.log("Tamanho do Array " + notas.length)
console.log("Total das Notas " + total);
console.log("Media " + total/notas.length);

