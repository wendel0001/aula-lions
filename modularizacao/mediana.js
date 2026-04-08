function mediana(numeros) {
    const listaOrdenada = numeros.sort((a, b) => a - b); 
    const meio = Math.floor(listaOrdenada.length / 2);
    if (listaOrdenada.length % 2 !== 0) {

        return listaOrdenada[meio];
    } else {
      
        return (listaOrdenada[meio - 1] + listaOrdenada[meio]) / 2;
    }
}

export default mediana;