const prompt = require("prompt-sync")();
const classificarJogador = (pontuacoes) => {

    const somaTotal = pontuacoes[0] + pontuacoes[1] + pontuacoes[2];
    

    const ultimaPartida = pontuacoes[2];

   
    if (somaTotal > 200 || ultimaPartida > 90) {
        return "Veterano";
    } else {
        return "Iniciante";
    }
};
    
const p1 = Number(prompt("Digite a pontuação da 1ª partida:"));
const p2 = Number(prompt("Digite a pontuação da 2ª partida:"));
const p3 = Number(prompt("Digite a pontuação da 3ª partida:"));
const listaDePontos = [p1, p2, p3];
const resultado = classificarJogador(listaDePontos);

console.log(`--- Relatório do Jogador ---`);
console.log(`
===================================================
==== Pontuações: ${listaDePontos.join(" | ")} ========================
==== Soma Total: ${p1 + p2 + p3} ================================         
==== Classificação: ${resultado} =====================              
`);
