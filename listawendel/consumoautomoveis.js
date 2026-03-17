const prompt = require('prompt-sync')();
    function media(distancia,combustivel){
    return (distancia + combustivel)/2;
    }
let distancia = parseFloat(prompt("Qual a distancia?"));
let combustivel = parseFloat(prompt("Qual a quantidade de combustível?"));

if (media(distancia,combustivel)>= 10) {
    console.log("consumo dentro do padrao operacional");
} else {
    console.log("Alerta: veiculo consumindo muito combustivel. nescessario agendar revisao mecanica");
}