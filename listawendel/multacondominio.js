const prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Qual o valor total do condominio?  "));
let dias = parseInt(prompt("Quantos dias de atraso:  "));
let vencimento = (prompt("O vencimento original caiu em um feriado ou final de semana?  "));

if (dias > 0 && vencimento =="nao") {
    console.log(valor + valor*2/10 +1 * dias);
}else {
    console.log(valor);
}
