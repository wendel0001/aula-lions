const prompt = require('prompt-sync')();

let produto = parseInt(prompt("Qual quantidade atual?  "));
let minimo = parseInt(prompt("Qual a quantidade minima?"));
let quantidade = minimo - produto
if (produto< minimo) {
    console.log("Alerta: Estoque baixo! É nescessario solicitar a compra de" + quantidade + "unidades" )
}else{
console.log("estoque regularizado!");
}