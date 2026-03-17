const prompt = require(`prompt-sync`)();

let venda = parseFloat(prompt("valor total de venda:  "));

if (venda <=20000) {
    console.log(venda + venda*5/100)
}else {
    console.log(venda + venda*2/100);
}