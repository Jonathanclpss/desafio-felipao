
let calculosDaPartida = calcularSaldo (80, 10)
let nivel = ""

 if (calculosDaPartida <= 10 ) {
        nivel = "Ferro";
} else if(calculosDaPartida >= 11 && calculosDaPartida <= 20){
      nivel = "Bronze";
} else if (calculosDaPartida >= 21 && calculosDaPartida <= 50){
      nivel = "Prata";
} else if(calculosDaPartida >= 51 && calculosDaPartida <= 80){
        nivel = "Ouro";
} else if (calculosDaPartida >= 81 && calculosDaPartida <= 90){
        nivel = "Diamante";
} else if (calculosDaPartida >= 91 && calculosDaPartida <=100){
        nivel = "Lendário";
}  else if (calculosDaPartida >= 101 ){
        nivel = "Imortal";
}


console.log(`O Herói tem de saldo de ${calculosDaPartida} vitorias é está no nivel de ${nivel}`)

function calcularSaldo(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}