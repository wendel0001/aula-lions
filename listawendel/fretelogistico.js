const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Qual a distancia?"));
let graviadade = (prompt("A entrega é urgente?"));


const calculo = 20 + 1.50* distancia;


if (distancia >= 100||gravidade == "sim") {
    console.log(calculo + 15);
}else{
    console.log("Aguarde a entrega ate o tempo estimado");
}