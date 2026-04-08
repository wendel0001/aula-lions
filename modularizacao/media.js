
function media(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }

  
    return soma / numeros.length;
}

export default media;