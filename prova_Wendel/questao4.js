let vogal = ["a", "e", "i", "o", "u"]

const palavra="abacaxi"

console.log(palavra);

let contagem=0

for (let i =0; i<7;i++){
   console.log(palavra[i])
   let analisar=vogal.includes(palavra[i])
if (analisar===true) {
    contagem=contagem +1
  
  
}
}
console.log(`existem ${contagem} vogais nessa palavra`);
