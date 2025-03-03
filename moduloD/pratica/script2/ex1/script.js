let idade = 55;
if (idade < 16) {
    if (idade <= 0){
        console.log("Feto não vota!!");
    } else{
    console.log("Você não pode votar");
    }
} else if (idade < 18 || idade >= 65) {
    if (idade > 115){
        console.log("Defundo não vota!!");
    } else {
        console.log("Você tem voto facultativo");
    }
    } else {
    console.log("Você é obrigado a votar em todo ciclo eleitoral");
    }

