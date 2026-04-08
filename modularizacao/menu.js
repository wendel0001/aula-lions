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
    ${roxo}│${reset} ${negrito}➕         CALCULADORA      ➖${reset} ${roxo}      │${reset}
    ${roxo}├──────────────────────────────────────┤${reset}
    ${roxo}│${reset}  ${amarelo}[1]${reset} ➖ Subtração                    ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[2]${reset} ➕ Adição                       ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[3]${reset} X  Multiplicação                ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[4]${reset} ➗ Divisão                      ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[5]${reset} %  Porcentagem                  ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[6]${reset} 📊 Média                        ${roxo}│${reset}
    ${roxo}│${reset}  ${amarelo}[7]${reset} 📈 Mediana                      ${roxo}│${reset}
    ${roxo}└──────────────────────────────────────┘${reset}
    `); 
}
export default menu;