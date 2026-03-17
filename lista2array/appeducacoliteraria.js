const prompt = require('prompt-sync')();

const aluno = {
    nome: prompt("Nome do aluno: "),
    pontosDeLeitura: 10,
    historicoDias: [
        { data: "14/03", paginasLidas: 20 },
        { data: "15/03", paginasLidas: 15 }
    ]
};
console.log("\n--- Registro de Leitura de Hoje ---");
const dataHoje = prompt("Informe a data de hoje (ex: 16/03): ");
const paginasHoje = parseInt(prompt("Quantas páginas você leu hoje? "));

const novoRegistro = {
    data: dataHoje,
    paginasLidas: paginasHoje
};

aluno.historicoDias.push(novoRegistro);

const ultimoRegistro = aluno.historicoDias[aluno.historicoDias.length - 1];

if (ultimoRegistro.paginasLidas > 50 && aluno.pontosDeLeitura > 0) {
    
    aluno.pontosDeLeitura *= 2;
    
    ultimoRegistro.data += " - Super Leitor!";
    console.log("INCRÍVEL! Você ganhou o bônus de Super Leitor!");
} 
else if (ultimoRegistro.paginasLidas < 10) {
    
    aluno.pontosDeLeitura /= 2;
    console.log("⚠️ Atenção: Leitura muito baixa. Seus pontos caíram pela metade.");
}


console.log("====================================");
console.log(`     PAINEL DO ALUNO: ${aluno.nome.toUpperCase()}     `);
console.log(`     PONTOS ATUAIS: ${aluno.pontosDeLeitura}          `);
console.log("====================================");
console.log("HISTÓRICO DE LEITURA:");
console.table(aluno.historicoDias); 