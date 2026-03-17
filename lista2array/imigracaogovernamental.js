const prompt = require('prompt-sync')();

const passageiro = {
    nome: prompt("Digite o nome do passageiro: "),
    nacionalidade: prompt("Digite a nacionalidade: "),
    trabalho: prompt("Está a trabalho? (sim/nao): ").toLowerCase() === "sim",
    documentos: ["Passaporte", "Visto"]
};


console.log("\nA alfândega exige uma terceira comprovação de saúde.");
const terceiroDoc = prompt("Qual o terceiro documento apresentado? (ex: Certificado de Vacina): ");


passageiro.documentos.push(terceiroDoc);



let permitido = false;

if (passageiro.nacionalidade.toLowerCase() === "brasil" || passageiro.nacionalidade.toLowerCase() === "brasileira") {
  
    if (passageiro.documentos[0] === "Passaporte") {
        permitido = true;
    }
} else {
   
    const temVistoNaPosicaoCerta = passageiro.documentos[1] === "Visto";
    const temSaudePreenchida = passageiro.documentos[2] && passageiro.documentos[2].trim() !== "";

    if (temVistoNaPosicaoCerta && temSaudePreenchida) {
        permitido = true;
    }
}

passageiro.entradaPermitida = permitido;

console.log("\n--- Relatório Imigratório ---");
console.log(passageiro);

