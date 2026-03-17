let filadeProjetos

const prompt = require('prompt-sync')();
let usuario ={
    nome: (prompt("digite o nome da sua empresa ou do cliente:  ")),   
    valorestimado: parseFloat(prompt("digite o valor estimado:  ")),
}
let prazo = prompt("o projeto possui prazo de entrega urgente?");

 if (prazo=="sim"&&usuario.valorestimado>3000) {
    let desconto = usuario.valorestimado*0.15+ usuario.valorestimado
    console.log(desconto);
} 
