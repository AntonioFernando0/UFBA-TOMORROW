console.log("Aula de 23/04/2025")
console.log("String: ")

let nomeUFBA = "UFBA"
let nomeIC = "Instituto de Computação"

console.log(nomeUFBA);

console.log("Number")

let numeroInteiro = 12;
let numeroDecimal =11.765;
let numeroNegativo = - 333;

console.log(numeroInteiro);

console.log("O valor do numero é " + numeroInteiro)


let numero01 = 10;
let numero02 = 23;
let soma = numero01 + numero02;

console.log(soma);
console.log(numero01 - numero02);
console.log(numero01 * 4);
console.log(5 / 3);

// incremento e decremento

let numeroInc = 10
numeroInc = numeroInc + 1

console.log(numeroInc)
++numeroInc
console.log(numeroInc)
numeroInc++ 
console.log(numeroInc)

numeroInc = 45;
 console.log (numeroInc) 
 numeroInc = numeroInc + 1 

numeroInc = numeroInc + 31;
console.log(numeroInc)


// Operadores Lógicos

let verdadeiro = true;
let falso = false;

console.log(verdadeiro)
let x1 = 11;
console.log(x1 > 55);

let idade = 18;

console.log(idade > 18 && idade < 90);
// operador logico e / and / &&
// todas condições seja verdadeira
/*
  V e V => V
  V e F => F
  F e V => F
  F e F => F

*/

console.log(idade > 18 || idade < 90);

/*
  V ou V => V
  V ou F => V
  F ou V => V
  F ou F => F

*/
let idade2 = 30;
console.log(idade2 != 33);           // true
console.log("Negação", !(idade2 != 33));  // false

idade = 33;
console.log(idade2 != 33);           // false
console.log("Negação", !(idade2 != 33));  // true


let var1 = 11, var2 = 11;
console.log (var1 == var2);
var2 = "11"
console.log(var1 === var2);// estritamente igual
console.log(var1 !== var2); // estritamente não igual


