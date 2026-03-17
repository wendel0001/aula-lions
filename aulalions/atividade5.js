const prompt = require('prompt-sync')();

let pergunta1 = (prompt("Voce gosta de cafe?"));
let resposta1 = "nao" 
let resposta2 = "sim" 

if (pergunta1 == "nao"){;
   console.log("Ok, vou te trazer um chá então");
} else if (pergunta1 == "sim") {
    console.log("otimo!! vou preparar agora mesmo");
} else{
    console.log("digite uma resposta valida")
}