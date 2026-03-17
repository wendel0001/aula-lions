const prompt = require('prompt-sync')();
 
let Vhr = parseFloat(prompt("Qual o valor ganho por hora?  "));
let extra = parseFloat(prompt("Quantidade de horas extras:  "));
let Vext = Vhr + Vhr*50/100
  
if (extra > 0) {
    console.log("O valor a receber de horas extras esse mes e de : R$" + Vext)
}else{
    console.log("Nao tem valor de hora extra esse mes");
}