const prompt = require('prompt-sync')();
let atleta = {
    nome: "wendel",
    peso: 80 ,
    meta: prompt("Qual a sua meta?  "),
    maratona: [20,40,60]
}

atleta.maratona.push(parseFloat(prompt("Digite a distancia da corrida de hoje?  ")));
function media(maratona) {
    return (maratona[1]+maratona[2]+maratona[3])/3;
}
let len = atleta.maratona.length    
if (media(atleta.maratona)>20 && atleta.meta== "Emagrecimento") {
        atleta.peso - 1
        console.log("meta atingida!!");
    }else if (atleta.meta=="performance"&& atleta.maratona[len - 1] > atleta.maratona[len - 2] ) {
        console.log("Novo record pessoal!!");
    }
console.log(atleta);








