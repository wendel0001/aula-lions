const prompt = require('prompt-sync')();
    function processamento(idade,anoatual){
        return(anoatual-idade);
    }
let anoatual = 2026
let nome = (prompt("Qual o seu nome?"));
let idade = parseInt(prompt("Qual a sua idade?"));
let aniver = (prompt("Ja fez aniversario esse ano?"));

if (aniver == "nao") {
    console.log(`Voce nasceu em : ${processamento(idade,anoatual -1)}`);
} else if (aniver == "sim") {
    console.log(`Voce nasceu em : ${processamento(idade,anoatual)}`)
} else {
    console.log("resposta invalida digite sim ou nao");
}