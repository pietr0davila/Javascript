let now = new Date();
let hora = now.getHours();

console.log(`Agora são ${hora} horas`);
if (hora < 12){
    if (hora >= 0 || hora <= 5){
        console.log("Boa madrugada!!");
    } else{
        console.log("Bom dia!!");
    }
} else if (hora < 18){
    console.log("Boa tarde!!");
} else if (hora > 18 && hora <= 23){
    console.log("Boa noite!!");
} else{
    console.log(`Não existe ${hora} horas`);
}