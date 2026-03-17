const prompt = require('prompt-sync')();
    function calcularlucro(venda, custo){
        return (venda-custo);
    }
let custo = parseFloat(prompt("Qual o valor do custo em R$?"));
let venda = parseFloat(prompt("Qual o valor da venda em R$?"));
let lucro = calcularlucro(venda, custo)

if (lucro >= 500) {
    console.log(`Margem de lucro saudável: R$ ${calcularlucro(venda, lucro)}`);
} else {
    console.log(`Margem de lucro perigosamente baixa: R$ ${calcularlucro(venda, custo)}`);
}
