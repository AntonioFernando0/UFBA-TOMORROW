//Estruturas de controle de repetição



//do while


let numero = 6;
let fatorial = numero;
let i = numero;

do {
    fatorial = fatorial * (i - 1);
    i = i - 1;
}while ( i > 1)
console.log(`O fatorial de ${numero} é ${fatorial}`);

// For 

let numero = 6;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
