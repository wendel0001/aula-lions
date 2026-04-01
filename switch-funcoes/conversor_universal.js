const prompt = require("prompt-sync")();

const converterMoeda = (valorBrl, moedaDestino) => {
    let resultado;

   
    switch (moedaDestino.toUpperCase()) {
        case "USD":
            resultado = valorBrl / 5.00; 
            return `Valor convertido: $${resultado.toFixed(2)} (Dólar)`;
        
        case "EUR":
            resultado = valorBrl / 6.00; 
            return `Valor convertido: €${resultado.toFixed(2)} (Euro)`;
        
        case "GBP":
            resultado = valorBrl / 7.00; 
            return `Valor convertido: £${resultado.toFixed(2)} (Libra)`;

        default:
            
            return `Moeda não encontrada. Valor original: R$${valorBrl.toFixed(2)}`;
    }
};


const valorParaCambio = Number(prompt("Digite o valor em Reais (BRL):"));
const moedaAlvo = prompt("Digite a moeda de destino (USD, EUR, GBP):");


const valorFinal = converterMoeda(valorParaCambio, moedaAlvo);

console.log("-----------------------------------------------");
console.log(valorFinal);
console.log("-----------------------------------------------");