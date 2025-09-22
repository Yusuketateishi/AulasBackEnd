const prompt = require('prompt-sync')();

let nome = prompt('Qual é seu nome?')
console.log(`Olá, ${nome}!`);

let IdaAni = ''
let anoNascimento = prompt(`${nome}, em que ano nasceu?`);
let aniversario = prompt(`Você ja fez aniversario Y/N`);
let idade = 2025 - parseInt(anoNascimento);
IdaAni = (aniversario == 'Y') ? idade : idade - 1;
console.log(`${nome}, Você tem ${IdaAni} anos`);