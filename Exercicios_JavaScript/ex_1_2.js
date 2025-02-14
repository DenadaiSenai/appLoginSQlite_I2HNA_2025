// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require('prompt-sync');
prompt = prompt();

const col = 80;

console.log(`Exercçio 1 - Operações matemáticas básicas.`);
let n1 = prompt('Digite o Número 1: ');
let n2 = prompt('Digite o Número 2: ');
let n3 = prompt('Digite o Número 3: ');

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

console.log("-".repeat(col));
console.log(`${n1} + ${n2} = ${parseFloat(n1)+parseFloat(n2)}`);
console.log(`${n1} - ${n2} = ${n1-n2}`);
console.log(`${n1} * ${n2} = ${n1*n2}`);
console.log(`${n1} / ${n2} = ${n1/n2} ou ${(n1/n2).toFixed(0)} resto ${n1 % n2}`);

console.log();

console.log("Exercício 2 - Média aritmética de 3 valores.");
const media3 = (n1+n2+n3)/3;
console.log(`A média aritmética dos valores [${n1} ${n2} ${n3}] é de ${media3}`);
console.log("-".repeat(col));




