const prompt = require('prompt-sync')();
const fs = require('fs');
const axios = require('axios');
const id = "123"
const senha = 102410
let memorias = [];

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
    (Comandos: 'historico' para ver registros | 'sair' para encerrar | limpar historico)
`);


    while (true) {
        let entrada = prompt(`${nome} > `);
        console.clear()

        if (entrada.toLowerCase() === 'sair') {
            console.log("Encerrando sistema... Até logo!");
            break;
        }

        if (entrada.toLowerCase() === 'limpar historico') {
            let chave1 = prompt("id:  ")
            let chave = prompt("Digite a senha para limpar o histórico: ");
            if (chave == senha && chave1 == id) {

                fs.writeFileSync('historico.json', JSON.stringify([]));

                console.log("[Sistema] Histórico limpo com sucesso.");
            }
        }

        if (entrada != "limpar historico") {
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

let prompt2 =prompt("Quer que eu complemente a resposta com mais detalhes?").toLowerCase();
if (prompt2 === "sim") {
       
        }

    }
}
main().catch(err => console.error("Erro fatal no sistema:", err));


}
