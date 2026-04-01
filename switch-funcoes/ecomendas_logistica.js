
const prompt = require("prompt-sync")();
function atualizarRastreio(codigo) {
    let statusTraduzido;

    switch (codigo.toUpperCase()) { 
        case "P":
            statusTraduzido = "Pendente de Envio";
            break;
        case "E":
            statusTraduzido = "Em Rota de Entrega";
            break;
        case "C":
            statusTraduzido = "Cancelado";
            break;
        default:
            statusTraduzido = "Status Inválido";
    }

    return statusTraduzido;
}
const encomenda = {
    id: "BR123456789",
    produto: "Monitor UltraWide"
};


const codigoInformado = prompt("Digite o código de status (P, E ou C):");


encomenda.statusAtual = atualizarRastreio(codigoInformado);


console.log("--- Registro Final da Encomenda ---");
console.table(encomenda);