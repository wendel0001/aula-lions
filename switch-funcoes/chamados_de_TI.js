const prompt = require('prompt-sync')();
function triagemChamado(nivel) {
    switch (nivel) {
        case 1:
            return "Atendimento Básico";
        case 2:
            return "Equipe Especializada";
        case 3:
            return "Gestão de Crise";
        default:
            return "Nível Desconhecido";
    }
}

let filaDeAtendimento = [];


const nivelInformado = Number(prompt("Digite o nível de criticidade do chamado (1, 2 ou 3):"));


const setorResponsavel = triagemChamado(nivelInformado);


if (setorResponsavel !== "Nível Desconhecido") {
    filaDeAtendimento.push(setorResponsavel);
    
    console.log(" Chamado triado com sucesso!");
} else {
    console.log(" Erro: Nível de criticidade inválido.");
}


console.log("--- Fila de Atendimento Atualizada ---");
console.log(filaDeAtendimento);