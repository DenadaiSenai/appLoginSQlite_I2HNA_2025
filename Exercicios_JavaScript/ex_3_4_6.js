// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require('prompt-sync');
prompt = prompt();

const idade1 = parseInt(prompt("Idade da primeira pessoa: "));
const idade2 = parseInt(prompt("Idade da segunda pessoa: "));

const maisVelha = idade1>idade2 ? 'pessoa 1' : idade1==idade2 ? 'iguais' : 'pessoa 2';

if (maisVelha=="iguais") {
    console.log("As duas pessoas tem a mesma idade.");
} else {
    console.log(`A pessoa mais velha é a ${maisVelha}.`);
}

console.log(`A pessoa 1 tem ${idade1} anos, é ${idade1>=18 ? 'MAIOR' : 'MENOR'} de idade.`);
console.log(`A pessoa 2 tem ${idade2} anos, é ${idade2>=18 ? 'MAIOR' : 'MENOR'} de idade.`);

console.log(`A pessoa 1${idade1>=18 ? '' : ' não'} pode dirigir.`)
console.log(`A pessoa 2${idade2>=18 ? '' : ' não'} pode dirigir.`)