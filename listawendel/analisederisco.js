const prompt = require('prompt-sync')();
  
let salario = parseFloat(prompt("qual seu salario liquido?"));
let parcela = parseFloat(prompt("qual valor da parcela desejada?"));
let porcentagem = salario*30/100
 let restricao = (prompt("o cliente possui restricao no nome?"))
if (parcela<= porcentagem && restricao == "nao") {
 console.log("Credito aprovado!");
}else if (parcela>= porcentagem && restricao == "nao") {
    console.log("Credito negado parcela muito alta ou possui restricao");
}else {
    console.log("Credito negado parcela muito alta ou possui restricao");
}