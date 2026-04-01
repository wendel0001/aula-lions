
const prompt = require('prompt-sync')();
let acesso=false;
let alerta= "Acesso negado! Verifique suas credenciais.";
let login = prompt("Digite seu nome:  ");
let cod = parseInt(prompt("Digite seu código de acesso:  "));

const validarAcesso = (login,cod) =>{
    return(login.length<5 && cod<1000)

}
while (acesso===true);
 if(validarAcesso(login,cod)) {
    console.log("Acesso permitido! Bem-vindo ao sistema.");
 }else {
    console.log(alerta);
 }
