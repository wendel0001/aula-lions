const prompt = require('prompt-sync')();

const servidor = {
    nome: "Servidor Principal AWS",
    capacidadeMaximaGigabytes: 500,
    sitesHospedados: [
        { dominio: "meuportifolio.com", tamanhoOcupadoGB: 120 }
    ]
};


console.log(`--- Gerenciador de Nuvem: ${servidor.nome} ---`);
console.log(`Capacidade Disponível: ${servidor.capacidadeMaximaGigabytes}GB`);

const novoDominio = prompt("Digite o domínio do novo site: ");
const novoTamanho = parseFloat(prompt("Digite o tamanho do site (GB): "));

const espacoOcupadoAtual = servidor.sitesHospedados[0].tamanhoOcupadoGB;
const totalAposUpload = espacoOcupadoAtual + novoTamanho;

if (totalAposUpload <= servidor.capacidadeMaximaGigabytes) {
    
    const novoSite = {
        dominio: novoDominio,
        tamanhoOcupadoGB: novoTamanho
    };
    
    servidor.sitesHospedados.push(novoSite);
    console.log("\n Upload Concluído! Sistema Operacional.");
} else {
    
    servidor.alertaSobrecarga = true;
    console.log("\n Falha: Falta de Espaço Físico. Cancele o deploy.");
}

console.log("\n--- RELATÓRIO TÉCNICO DA NUVEM ---");
console.log(servidor);