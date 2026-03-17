const viagem1= {
    destino: "Franca",
    quantidade: Number(3000)
}
const viagem2={
    destino: "Portugual",
    quantidade: Number(1000)
}
const prompt=require('prompt-sync')();

let cliente= {
    nome: "wendel",
    historico: [viagem1,viagem2]
}

let viagem3={
    destino:(prompt("Para onde é o proximo destino?  ")),
    quantidade:(parseFloat(prompt("Qual a quantidade  ")))
}
cliente.historico.push(viagem3);

let soma = viagem1.quantidade + viagem2.quantidade + viagem3.quantidade;

if (soma>5000) {
    let total=soma-5000
    cliente.categoria="Platinum"
    console.log("Parabens!!");
}else{
    cliente.categoria="gold"
    let total=5000 - soma
    console.log("faltam:  "+ total + " de milhas!");
}