const prompt= require('prompt-sync')();
const hamburguer= 30

let cliente={
    nome:prompt("Digite o seu nome "),
    lista: [],
    quantidade:parseInt(prompt("Quantos lanches voce pediu?  ")),
    ingredientesextra: [],
    valoringredientes: []
}

cliente.ingredientesextra.push(prompt("digite um igrediente extra: "));
cliente.valoringredientes.push(parseFloat(prompt("Digite o valor do igrediente:  ")));
cliente.ingredientesextra.push(prompt("digite seu seu segundo igrediente extra:  "));
cliente.valoringredientes.push(parseFloat(prompt("digite o valor do igrediente:  ")));

let continua= prompt("quer mais ingredientes? ");
let soma= (cliente.valoringredientes[0]+cliente.valoringredientes[1]+ hamburguer)*cliente.quantidade 

if (continua=="nao"&&cliente.ingredientesextra.length===2 && cliente.quantidade>=2 ) {
    console.log(soma + " valor final: "+ (soma -0.20*soma));
}else {
    console.log("por favor digite as informacoes sem erros para que o codigo trabalhe!!");
}
//digite 2 ou mais na quantidade de lanches para o codigo funcinar de acordo com a atividade!!
//digite "nao" sem espaços e sem letra maiuscula!!