let salarios = [2500, 3200, 4100, 5000, 6200]

for (let i=0; i < salarios.length; i++) { 
    salarios[i] = salarios[i]*0.1 + salarios[i]
    
}
console.log(salarios);