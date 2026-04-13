const prompt = require('prompt-sync')();
cons
 
const axios = require('axios');


 
const API = '0b8e2fca0dd623b63e8ee9c14a11cf19a86af0df';

async function realizarPesquisa(termo) {
    console.log("\n[Sistema] Consultando fontes na nuvem...");
    
    try {
        const response = await axios.post('https://google.serper.dev/search', {
            q: termo,
            global: "br", 
            hl: "pt-br" 
        }, {
            headers: { 
                'X-API-KEY': API,
                'Content-Type': 'application/json'
            } 
        });


        const snippet = response.data.organic[0]?.snippet;
        const answerBox = response.data.answerBox?.answer;

        return answerBox || snippet || "Encontrei o assunto, mas não consegui resumir a resposta.";

    } catch (error) {
        if (error.response?.status === 403) {
            return "Erro: Chave de API inválida ou expirada.";
        }
        return `Erro de conexão: ${error.message}`;
    }
}


async function main() {
    console.log("=== IA DO WENDEL ATIVADA ===");
    
    let nome = prompt("Qual o seu nome? ");
    console.clear();
    console.log(`Olá, ${nome}! Como posso te ajudar hoje?`);
    console.log(`
    (Comandos: 'historico' para ver registros | 'sair' para encerrar)
`);


    while (true) {
        let entrada = prompt(`${nome} > `);

        if (entrada.toLowerCase() === 'sair') {
            console.log("Encerrando sistema... Até logo!");
            break;
        }

     
        let memorias = [];
        if (fs.existsSync('historico.json')) {
            try {
                memorias = JSON.parse(fs.readFileSync('historico.json', 'utf-8'));
            } catch (e) {
                memorias = [];
            }
        }


        if (entrada.toLowerCase() === 'historico') {
            if (memorias.length > 0) {
                console.log("--- MEMÓRIAS LOCALIZADAS ---");
                console.table(memorias);
            } else {
                console.log("[Sistema] Nenhuma memória encontrada no banco de dados.");
            }
            continue;
        }

        const respostaIA = await realizarPesquisa(entrada);
        
        console.log(`RESPOSTA: ${respostaIA}`);


        const novaEntrada = {
            usuario: nome,
            pergunta: entrada,
            resposta: respostaIA,
            data: new Date().toLocaleString('pt-BR')
        };

        memorias.push(novaEntrada);
        fs.writeFileSync('historico.json', JSON.stringify(memorias, null, 2));
        console.log("------------------------------------------");
        console.log("[Sistema] Informação memorizada com sucesso.");
        console.log("------------------------------------------");
    }
}


main().catch(err => console.error("Erro fatal no sistema:", err));
    