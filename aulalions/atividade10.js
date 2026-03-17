let listaTarefa = [];
const prompt = require('prompt-sync')();
 let tare1 = (prompt("sua primeira tarefa: "));
 let tare2 = (prompt("sua segunga tarefa: "));
 let tare3 = (prompt("sua terceira tarefa: "));
 console.log('voce tem 3 tarefa na sua lista');
 listaTarefa.push(tare1, tare2, tare3)
 let ter = (prompt("voce terminou a ultima tarefa?"));
  if (ter = "sim") {
    listaTarefa.pop(listaTarefa);
    console.log("voce terminou a ultima tarefa!");
  }
