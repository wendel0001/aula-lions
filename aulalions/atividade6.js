const prompt = require('prompt-sync')();

let usuario = (prompt("Nome de usuario: "));
let idade = parseInt(prompt("Idade: "));
let ANOS = 18-idade;

console.log(usuario + " voce vai ser maior de idade em " + ANOS + " ano(s).");
