const prompt=require('prompt-sync')();
const turbina={
    lado: "motor esquerdo",
    status:"desligado",
    leituras: [0,0,0]
}
console.log(`--- SISTEMA DE MONITORAMENTO: ${turbina.lado} ---`);
const novaTemp = parseFloat(prompt("Digite a Temperatura (°C): "));
const novaPressao = parseFloat(prompt("Digite a Pressão do Óleo (PSI): "));
const novoCombustivel = parseFloat(prompt("Digite o Nível de Combustível (%): "));

const tempOk = (novaTemp >= 20 && novaTemp <= 90);
const pressaoOk = (novaPressao > 50);
const combustivelOk = (novoCombustivel > 20);

turbina.leituras = [novaTemp, novaPressao, novoCombustivel];

if (tempOk && pressaoOk && combustivelOk) {
    turbina.status = "Ligado";
} else {
   
    turbina.status = "Falha Crítica";
    turbina.bloqueioAtivado = true;
}
console.log("\n==================================================================================");
console.log("                             PAINEL DE VOO          ");
console.log("==================================================================================");
console.table([turbina]);