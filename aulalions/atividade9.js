const prompt = require('prompt-sync')();

let notas = [];
let prova1 = parseFloat(prompt("Qual o valor da prova 1?"));
let prova2 = parseFloat(prompt("Qual o valor da prova 2?"));
let media = prova1 + prova2 /3
notas.push(prova1)
notas.push(prova2)
console.log(` a media é : ${media}`);
