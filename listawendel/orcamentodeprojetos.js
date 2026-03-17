const prompt = require('prompt-sync')();
    function calcularDesconto(total,desconto){
    return (total -total*desconto);
    }
let horas = (prompt("Horas estimadas: "));
let info =(prompt("O cliente é uma ONG?"));
let desconto = 0.10
let total = horas*45
if (total > 5000 && info == "sim") {
 console.log(calcularDesconto(total,desconto))
} else {
console.log(total);
}