let lista=[1, 2, 3, 4, 5,6]

for(let i =0; i<6; i++){
    console.log(lista[i])
   lista.sort((a, b)=> a-b)
}
console.log("o maior é:"+lista.length);