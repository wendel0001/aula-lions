const prompt = require('prompt-sync')();

function media(nota1,nota2,nota3){
    return (nota1+nota2+nota3)/3;  
}

 let nota1 = parseFloat(prompt("Qual a nota do primeiro semestre?   "));
 let nota2 = parseFloat(prompt("E a nota do segundo semestre?   "));
 let nota3 = parseFloat(prompt("E a nota do terceiro semestre?   "));

console.log(`A média é :  ${media(nota1,nota2,nota3)} `);



