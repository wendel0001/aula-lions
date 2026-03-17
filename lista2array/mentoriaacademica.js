const prompt = require('prompt-sync')();

let mentor1= {
    nome: "Daniel",
    area: "tecnologia"
}
let mentor2 = {
    nome:"Lucas",
    area:"fisica"
}

let max= 5
let fisica= 2
let tecnologia=5
let status= 'BLOQUEADO PARA INSCRICOES' 

let mentor3 = {
    nome:prompt("Qual seu nome?   "),
    area:prompt("Qual area voce deseja?  ")
}
if ((mentor3.area==="fisica"&& fisica==max || 
mentor3.area=== "tecnologia" && tecnologia>=max)) {
console.log(status)
    console.log("Essa area atingiu o numero maximo de participantes por favor verifique se outra area esta disponivel ");
}else  {
    console.log("Projeto Aqui!!");
    console.log("participantes:");
    console.table([mentor1,mentor2,mentor3]);
    console.log("voce esta inscrito");
}


