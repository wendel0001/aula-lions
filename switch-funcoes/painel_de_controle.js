const prompt = require("prompt-sync")();
const caixa = {
    operador: "Marcos Silva",
    saldo: 100.00,
    historico: []
};


const registrarVenda = (valorAtual, valorVenda) => valorAtual + valorVenda;
const registrarDespesa = (valorAtual, valorDespesa) => valorAtual - valorDespesa;

let continuar = true;

while (continuar) {
    console.log(`Saldo Atual: R$ ${caixa.saldo.toFixed(2)}`);
console.log((`
======== Menu do Caixa ========
    [V] Registrar Venda
    [D] Registrar Despesa
    [S] Sair e Gerar Relatório
    `));

    let escolha = prompt("Escolha uma opção: ").toUpperCase();

    switch (escolha) {
        case "V":
            let valorV = parseFloat(prompt("Valor da Venda:"));

            caixa.saldo = registrarVenda(caixa.saldo, valorV);
            caixa.historico.push("Entrada");
            console.log("Venda registrada!");
            break;

        case "D":
            let valorD = parseFloat(prompt("Valor da Despesa:"));
    
            caixa.saldo = registrarDespesa(caixa.saldo, valorD);
            caixa.historico.push("Saída");
            console.log("Despesa registrada!");
            break;

        case "S":
            continuar = false;
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
    }
}


console.log("--- RELATÓRIO FINAL DE AUDITORIA ---");
console.table(caixa);