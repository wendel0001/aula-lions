const prompt = require('prompt-sync')();
console.log("🖥️ Bem-vindo à calculadora de aumento salarial! Por favor, selecione o seu cargo para calcular o aumento correspondente.");
console.log("💼-Estagiario-[1]\n👔-Junior[2]\n👑-Pleno[3]");
let pergunta1 = parseInt(prompt("Digite o número correspondente ao seu cargo:  "));
function cargo(cargo) {
    switch (cargo) {
        case 1:
            let pergunta2 = parseFloat(prompt("💲Digite o valor do salário:  "))
            let aumento1 = pergunta2 * 0.10
            console.log(`O aumento para o cargo de Estagiário é de 10%, totalizando: ${aumento1 + pergunta2} `);
            break;
        case 2:
            let pergunta3 = parseFloat(prompt("💲Digite o valor do salário:  "))
            let aumento2 = pergunta3 * 0.15
            console.log(`O aumento para o cargo de Junior é de 15%, totalizando: ${aumento2 + pergunta3} `);
            break;
        case 3:
            let pergunta4 = parseFloat(prompt("💲Digite o valor do salário:  "))
            let aumento3 = pergunta4 * 0.20
            console.log(`O aumento para o cargo de Pleno é de 20%, totalizando: ${aumento3 + pergunta4} `);
            break
        default:
            console.log("❌Opção inválida! Por favor, escolha um cargo válido❌");
            break;
    }
}
cargo(pergunta1);

