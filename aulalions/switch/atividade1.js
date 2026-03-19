const prompt=require ('prompt-sync')();
console.log("🍿-CINEMA-🍿\n\n🎥Ação[1] \n🎥Comédia[2] \n🎥Terror[3] \n🎥Animação[4] ");
let genero = parseInt(prompt("Digite o número correspondente ao gênero do filme que deseja assistir: "));
switch (genero) {
    case 1:
        console.log("👊Você escolheu Ação! Prepare-se para muita adrenalina e cenas emocionantes!");
        break;
    case 2:
        console.log("🤣Você escolheu Comédia! Prepare-se para muitas risadas e diversão garantida!");
        break;
    case 3:
        console.log("👻Você escolheu Terror! Prepare-se para momentos de suspense e medo!");
        break;
    case 4:
        console.log("🐻Você escolheu Animação! Prepare-se para histórias encantadoras e personagens cativantes!");
        break;
    default:
        console.log("😥Opção inválida! Por favor, escolha um gênero de filme válido.");
        break;
}