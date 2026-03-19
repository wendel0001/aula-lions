const prompt=require('prompt-sync')();
let tempInicial=parseFloat(prompt("Digite a temperatura inicial:  "))


for (let i = 0; i < 5; i = i +1) {
     tempInicial = tempInicial + 2
     console.log(`a ${i} temperatura ${tempInicial}`);
}
