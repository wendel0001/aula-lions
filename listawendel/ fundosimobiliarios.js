const prompt = require('prompt-sync')();
function calcularValor(cotas,rendimento){
    return (cotas*rendimento)
}
let cotas = parseFloat(prompt("Qual a quantidade da sua cota?"));
let rendimento = parseFloat(prompt("Qual o valor do rendimento?"));
if (calcularValor(cotas,rendimento) >= 100) {
    console.log("Voce ja tem saldo suficiente para comprar uma nova cota e reinvestir");
}else {
console.log(`rendimento recebido :${calcularValor(cotas,rendimento)}. Acumule mais para investir`);
}