    const prompt = require('prompt-sync')();
    const fs = require('fs');

    let nome = prompt("Qual o seu nome? ");
    console.log(`Olá, ${nome}! Eu sou a IA do Wendel. O que você quer pesquisar hoje?`);

    let pesquisa = prompt("> ");

    let memorias = [];
    if (fs.existsSync('historico.json')) {
        memorias = JSON.parse(fs.readFileSync('historico.json', 'utf-8'));
    }

    const novaEntrada = {
        usuario: nome,
        termo: pesquisa,
        data: new Date().toLocaleString('pt-BR'), 
        resposta: `Você pesquisou sobre ${pesquisa}`
    };

    memorias.push(novaEntrada);
    fs.writeFileSync('historico.json', JSON.stringify(memorias, null, 2));

    console.log("Informação memorizada com sucesso!");

    console.table(memorias);