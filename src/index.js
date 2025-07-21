let nomeHeroi = "Bilu ";
let expericeiencia = 0;
let nivel = ""

if (expericeiencia <= 1000){
    nivel = "Ferro";
} else if (expericeiencia >= 1001 && expericeiencia <=2000){
    nivel = "Bronze";
} else if (expericeiencia >=2001 && expericeiencia <=5000){
    nivel = "Prata";
} else if (expericeiencia >=5001 && expericeiencia <=7000){
    nivel = "Ouro";
} else if (exoericencia >=7001 && expericeiencia <=8000){
    nivel = "Platina";
} else if (expericeiencia >=8001 && expericeiencia <=9000){
    nivel = "Ascendente";
} else if (expericeiencia >= 9001 && expericeiencia <=10000){
    nivel = 'Imortal';
} else if (expericeiencia >= 10001){
    nivel = "Radiante";
}


console.log("O heroi de nome: " + nomeHeroi + "esta no nivel " + nivel)