    const prompt = require('prompt-sync')();
    let registro ={
     nome:prompt("Digite o seu nome:  ")
    }

    let escolha;
       console.log(`Olá ${registro.nome}, seja bem-vindo à nossa loja de eletrônicos!`);
       function produto() {
       return console.log(`
                        📱 [1] - Smartphone
                        💻 [2] - notebook
                        🎧 [3] - Fones de ouvido
                        
                        =========================
                        🔚 [0] - 𝙀𝙉𝘾𝙀𝙍𝙍𝘼𝙍 𝘾𝙊𝙈𝙋𝙍𝘼
                        =========================
       `);
       }
       produto();
        escolha = parseInt(prompt("Digite o número correspondente ao produto que deseja comprar:  "));
    
       
        switch (escolha) {
            case 1:
                console.log(`
                ==============================
                📱Você escolheu um Smartphone!
                ============================== 
                Temos os melhores modelos do 
                mercado para você escolher
                ==============================`);
                registro.valor_produto = 2000
                console.log(registro.valor_produto)
                break;
    
            case 2:
                console.log(`
            =================================================================
                            💻Você escolheu um notebook! 
            =================================================================
            Temos uma variedade de notebook para atender às suas necessidades
            =================================================================
                `);
                registro.valor_produto = 2700
                console.log(registro.valor_produto);
                break;
            case 3:
                console.log(`
            ======================================================================
                            🎧Você escolheu Fones de ouvido!
            ======================================================================
                 Temos uma seleção incrível de fones de ouvido para você desfrutar
            ======================================================================
                 `);
                registro.valor_produto = 230
                console.log(registro.valor_produto);
                break;
            case 0: 
                console.log(`Obrigado por visitar nossa loja de eletrônicos! Volte sempre para conferir as novidades e promoções exclusivas. Tenha um ótimo dia!`);
                break;
            default:
                console.log(`😥Opção inválida! Por favor, escolha um produto válido.`);
                break;
    }
    