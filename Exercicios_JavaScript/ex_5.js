// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require('prompt-sync');
prompt = prompt();

const usuario = prompt("Digite o nome do usuário: ");
const senha = prompt("Digite a senha: ");

// if(usuario==="admin"){
//     if(senha==="1234") {
//         console.log('Acesso liberado.')
//     } else {
//         console.log(`${usuario} você digitou a senha errada!`)
//     }
//  } else {
//     console.log(`Usuário não cadastrado.`)
//  }

usuario==='admin' && senha==='1234' ? console.log('Login bem sucedido!') : console.log('Login não permitido');
