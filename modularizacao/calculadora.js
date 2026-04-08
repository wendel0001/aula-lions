import PromptSync from "prompt-sync";
const prompt = PromptSync();

import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";
import porcentagem from "./porcentagem.js";
import menu from "./menu.js";
import mediana from "./mediana.js";
import media from "./media.js"; 


const yuri = (ms) => new Promise(resolve => setTimeout(resolve, ms));

menu();
let opcao = parseFloat(prompt(`Escolha uma funcao: `));
let num1;
let num2;
let continuar;
let resultado;
let numMedia = [];

switch (opcao) {
    case 1:
        console.clear();
        num1 = Number(prompt("R:"));
        num2 = Number(prompt("R:"));
        resultado = subtrair(num1, num2);
        break;

    case 2:
        console.clear();
        num1 = Number(prompt("R:"));
        num2 = Number(prompt("R:"));
        resultado = somar(num1, num2);
        break;

    case 3:
        console.clear();
        num1 = Number(prompt("R:"));
        num2 = Number(prompt("R:"));
        resultado = multiplicar(num1, num2);
        break;

    case 4:
        console.clear();
        num1 = Number(prompt("R:"));
        num2 = Number(prompt("R:"));
        resultado = dividir(num1, num2);
        break;

    case 5:
        console.clear();
        num1 = Number(prompt("numero qual vai ser a porcentagem: "));
        num2 = Number(prompt("quantos porcento: "));
        resultado = porcentagem(num1, num2);
        break;

    case 6:
        console.clear();
        numMedia = []; 
        do {
            let n = Number(prompt("Digite um número: "));
            numMedia.push(n);
            continuar = prompt("Deseja adicionar outro? (sim/nao): ").toLowerCase();
        } while (continuar === "sim");

        console.log(`=================== CALCULANDO ==================`);
        await yuri(2000); 

        resultado = media(numMedia);
        break;

    case 7:
        console.clear();
        numMedia = []; 
        do {
            let n = Number(prompt("Digite um número para mediana: "));
            numMedia.push(n);
            continuar = prompt("Deseja adicionar outro? (sim/nao): ").toLowerCase();
        } while (continuar === "sim");

        console.log(`=================== CALCULANDO ==================`);
        await yuri(2000);
        resultado = mediana(numMedia);
        break;

    default:
        console.clear();
        console.log(`=================== OPCAO INVALIDA ==================`);
        break;
}

if (resultado !== undefined) {
    console.log(`O resultado foi: ${resultado}`);
}

console.table(numMedia);
