const prompt=require('prompt-sync')();
const senhaCorreta = "0000";

let tentativa;
let alert;

while (tentativa !== senhaCorreta) {
    

    tentativa = prompt("Painel de Segurança: Insira a senha numérica de acesso:");

    
    if (tentativa !== senhaCorreta) {
        alert=("Acesso negado: Senha incorreta");
        console.log("Tentativa falhou. Solicitando novamente...");
    }
}


alert=("Cofre liberado com sucesso");
console.log("Acesso autorizado.");