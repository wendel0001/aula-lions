const prompt = require('prompt-sync')();
console.log(`
==============================================================================
================🌡️ BEM-VINDO AO MONITORAMENTO CLIMÁTICO!🌡️ =====================
==============================================================================

-------------------------------------------------------------------------------
Por favor, insira as temperaturas para avaliar as condições climáticas do local.
-------------------------------------------------------------------------------
`);
    let temperaturas= {
    valor1: parseFloat(prompt(` 🌡️ Digite a primeira temperatura: `)),
    valor2: parseFloat(prompt(` 🌡️ Digite a segunda temperatura: `)),
    valor3: parseFloat(prompt(` 🌡️ Digite a terceira temperatura: `))
}
    let media = (temperaturas.valor1 + temperaturas.valor2 + temperaturas.valor3)/3;

    const avaliarTemperatura = () => {
        
        if (media>= 35) {
        return "Perigo: media de temperatura extrema  "
     } else {
            return " Temperaturas dentro da normalidade";
    }
}

console.table(temperaturas);
console.log(`
================== Media das temperaturas: ${media} ===========================
============${avaliarTemperatura()} =========================
`);