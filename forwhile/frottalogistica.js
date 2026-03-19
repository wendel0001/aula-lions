const max = 1000
const caminhao = 200
const prompt=require('prompt-sync')();

    let peso=parseFloat(prompt("Digite o peso da caixa que esta sendo carregada:  "))    
    let soma = peso
    let espec
do {
    soma = peso + caminhao  
     espec = prompt("Tem mais caixa para o carregamento?");
 
    if (soma>max) {
        console.log("===CARGA PASSOU DO LIMITE===\n ===CARREGAMENTO FOI IMTERROMPIDO AJUSTE A CARGA NOVAMENTE===");
    }else if (espec=="sim"){
        let peso=parseFloat(prompt("Digite o peso da caixa que esta sendo carregada:  "))    
         
    }else 
    console.log("///===CARGA CARREGADA COM SUCESSO===///\n"+soma);
} while (espec === "sim");
