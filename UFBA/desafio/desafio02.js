let peso = 52;
let altura = 1.67;
let imc = peso / (altura * altura);

if (imc < 17) {
  console.log("Muito abaixo do peso");
} else if (imc >= 17 && imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.99) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.99) {
  console.log("Acima do peso");
} else {
  console.log("Obesidade");
}
