let estoqueTamanhos=[10, 15, 8];

const prompt=require('prompt-sync')();

let CtamP = parseInt(prompt("quantas camisetas do tamanho P?"));

function numero(CtamP,estoqueTamanhos) {
    return (CtamP-estoqueTamanhos[0]);
}
if (numero(CtamP,estoqueTamanhos>5)) {
    console.log("Alerta! estoque de luvas tamanho P esta critico!");
}else {

    console.log("Estoque atualizado, Quantidade restante do tamanho P:"+numero(CtamP,estoqueTamanhos));
}





