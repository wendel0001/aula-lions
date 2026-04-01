const prompt = require('prompt-sync')();

let estacao = {
    id: "",
    local: '' ,
   temperatura: []
}
estacao.temperatura.push(Number(prompt("digite a primeira temperatura:  ")));
estacao.temperatura.push(Number(prompt("digite a segunda temperatura:   ")));
estacao.temperatura.push(Number(prompt("digite a terceira temperatura:  ")));


const media =(temperatura) => {
  return (temperatura[0] + temperatura[1] + temperatura[2])/3
  
} 

 
if (media(estacao.temperatura) >= 35) {
        estacao.alerta===true
        console.log("perigo: media de temperatura extrema  "+ media(estacao.temperatura) + " detectada no" +estacao.local);
}else {
    estacao.alerta === false
    console.log(" temperaturas dentro da normalidade");
}
console.table(estacao);