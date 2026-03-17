const prompt = require('prompt-sync')();
function processamento(idade,anoatual){
    return (anoatual-idade);
}
let anoatual = parseInt(prompt("Em que anos estamos?"));
let idade = parseInt(prompt("Qual a sua idade?"));
let aniver = (prompt("Voce ja fez aniversario?"));

if (aniver == "nao") {
    console.log(`Voce nasceu em : ${processamento(idade,anoatual -1)}`)
} else {
    console.log(`Voce nasceu em :${processamento(idade,anoatual)}`)
}
