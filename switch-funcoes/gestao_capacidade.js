const prompt = require('prompt-sync')({ sigint: true });

const servidor = {
    nome: "Servidor_Alpha_01",
    espacoTotal: 100,
    espacoOcupado: 75  
};

function realizarUpload(objServidor, tamanhoArquivo) {
    const espacoNecessario = objServidor.espacoOcupado + tamanhoArquivo;

    
    if (espacoNecessario <= objServidor.espacoTotal) {
        
        objServidor.espacoOcupado = espacoNecessario;
        return true;
    } else {
        return false; 
    }
}

console.log(`Status Atual: ${servidor.espacoOcupado}GB de ${servidor.espacoTotal}GB ocupados.`);
const novoArquivo = parseInt(prompt("Qual o tamanho do arquivo que deseja subir (em GB)?"));


const sucesso = realizarUpload(servidor, novoArquivo);

if (sucesso) {
    console.log("Upload aceito! O arquivo foi salvo com sucesso.");
} else {
    console.log("Upload rejeitado! Espaço insuficiente no servidor.");
}

console.log("--- Estado Final do Servidor ---");
console.table(servidor);