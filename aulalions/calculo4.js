const prompt = require(`prompt-sync`)();

let numero =(prompt("Escolha um numero"))
if (numero == 0) {
    console.log("o numero que voce digitou é zero.");
} else if (numero %2 == 0){
    console.log("o numero que voce digitou é par.")
} else {
console.log("o numero que voce digitou é impar.")

}
