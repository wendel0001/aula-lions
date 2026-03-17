const prompt = require('prompt-sync')();

let paciente = {}
paciente.nome=(prompt("digite o nome do seu pet?")),
paciente.raca=(prompt("digite a raca do seu pet?")),
paciente.idade=parseInt(prompt("digite a idade dele:  "));
   
    if (paciente.idade>=8) {
      console.log("o paciente ja e senior e precisa de exames de rotina");
    } else {
      console.log("paciente na faixa de idade regular "+ paciente.nome + ","+ paciente.raca+"," + paciente.idade);
    }