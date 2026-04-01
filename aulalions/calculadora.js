const prompt = require('prompt-sync')();
let numero1;
let numero2;
let resultado;

const menu = () => {
   
    const reset = "\x1b[0m";
    const negrito = "\x1b[1m";
    const roxo = "\x1b[34m";
    const verde = "\x1b[32m";
    const amarelo = "\x1b[33m";
    const vermelho = "\x1b[31m";
    const ciano = "\x1b[36m";

    console.log(`
    ${roxo}┌──────────────────────────────────────┐${reset}
    ${roxo}│${reset} ${negrito}➕  CALCULADORA INTERATIVA  ➖${reset} ${roxo}      │${reset}
    ${roxo}├──────────────────────────────────────┤${reset}
    ${roxo}│${reset}  ${amarelo}[1]${reset} ➖ Subtração                    ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[2]${reset} ➕ Adição                       ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[3]${reset} X  Multiplicação                ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[4]${reset} ➗ Divisão                      ${roxo}│${reset}
    ${roxo}└──────────────────────────────────────┘${reset}
    `);

    let yuri = parseFloat(prompt(`${ciano}👉 Escolha uma função de cálculo: ${reset}`));
    console.clear();

    switch (yuri) {
        case 1:
            console.log(`${vermelho}--- SUBTRAÇÃO ---${reset}`);
            numero1 = Number(prompt("🔹 Digite o primeiro número: "));
            numero2 = Number(prompt("🔹 Digite o segundo número: "));
            console.clear();
            resultado = numero1 - numero2;
            console.log(`\n${verde}✅ Resultado:${reset} ${negrito}${resultado}${reset}\n`);
            break;
        case 2:
            console.log(`${verde}--- ADIÇÃO ---${reset}`);
            numero1 = Number(prompt("🔹 Digite o primeiro número: "));
            numero2 = Number(prompt("🔹 Digite o segundo número: "));
            console.clear();
            resultado = numero1 + numero2;
            console.log(`\n${verde}✅ Resultado:${reset} ${negrito}${resultado}${reset}\n`);
            break;
        case 3:
            console.log(`${amarelo}--- MULTIPLICAÇÃO ---${reset}`);
            numero1 = Number(prompt("🔹 Digite o primeiro número: "));
            numero2 = Number(prompt("🔹 Digite o segundo número: "));
            console.clear();
            resultado = numero1 * numero2;
            console.log(`\n${verde}✅ Resultado:${reset} ${negrito}${resultado}${reset}\n`);
            break;
        case 4:
            console.log(`${ciano}--- DIVISÃO ---${reset}`);
            numero1 = Number(prompt("🔹 Digite o primeiro número: "));
            numero2 = Number(prompt("🔹 Digite o segundo número: "));
            console.clear();
            resultado = numero1 / numero2;
            console.log(`\n${verde}✅ Resultado:${reset} ${negrito}${resultado}${reset}\n`);
            break;
        default:
            console.log(`\n${vermelho}❌ Erro: Digite uma opção válida!${reset}\n`);
            break;
    }
}
menu();