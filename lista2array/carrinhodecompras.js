const prompt=require('prompt-sync')();
let lista = []

let cliente = (prompt("qual seu nome?  "));
let assinatura = (prompt("sua assinatura é Prime?"));

lista.push(parseFloat(prompt("digite o preço do seu primeiro item")));
lista.push(parseFloat(prompt("digite o preço do seu segundo item")));
lista.push(parseFloat(prompt("digite o prço do seu terceiro item")));

function valorDaCompra(lista) {
    return (lista[0]+lista[1]+lista[2])
}

if (valorDaCompra(lista)>200||assinatura=="sim") {
   let freteGratis = true
    console.log("Voce tem direito a frete gratis!!");
    let SN = prompt("Por favor digite seu endereço:   ") 
    let confirm = prompt("aguarde sua entrega!!")
}else { 
    let freteGratis=false 
    const desconto = 30 + valorDaCompra(lista)
    console.log("voce nao tem direito a frete gratis  R$"+ desconto);
}












