const prompt= require('prompt-sync')();
let itemInit= parseFloat(prompt("Adicione o valor do item: "));
let compraAtual;
let agradecimento ="=====================================\n==== OBRIGADO PELA PREFERENCIA!! ====\n=====================================";
let total = itemInit
do {
   compraAtual = prompt("Quer adiconar mais um item?sim/nao  ");
   
 if(compraAtual!=="sim"&& compraAtual!=="nao") {

    console.log("ERRO, TENTE NOVAMENTE");

 } else if(compraAtual.toLowerCase()==="sim"){
    
    let valorItem=parseFloat(prompt("Qual o valor do item  "));
    total = total + valorItem

 } else{
 console.log(agradecimento)
 console.log("sua compra deu: "+ total) 

}
    
} while (compraAtual=="sim");
    
