const prompt = require('prompt-sync')();

const grupoVIP = {
    empresa: prompt("Nome da empresa: "),
    orcamentoTotal: parseFloat(prompt("Orçamento total da noite (R$): ")),
    openBarFechado: false,
    consumoExtras: [] 
};

console.log("\n--- Lançamento do Promotor ---");
const bebida1 = prompt("Nome da primeira bebida importada: ");
const bebida2 = prompt("Nome da segunda bebida importada: ");
const valorTotalBebidas = parseFloat(prompt("Valor total das duas bebidas (R$): "));

grupoVIP.consumoExtras.push(bebida1, bebida2);
grupoVIP.orcamentoTotal -= valorTotalBebidas;

if (grupoVIP.orcamentoTotal < 0) {
    grupoVIP.openBarFechado = true;
    grupoVIP.multaExcedente = 500.00; 
    console.log("ALERTA: Orçamento estourado! Open Bar encerrado.");
} else {
    console.log(`Saldo restante disponível: R$ ${grupoVIP.orcamentoTotal.toFixed(2)}`);
}


console.log("\n--- FECHAMENTO FINANCEIRO DO CAMAROTE ---");
console.log(grupoVIP);