let nomeHeroi = "Reginaldo"
let xp = "9000"
let nivelHeroi

//variaveis
if (xp <=1000) {
    nivelHeroi = "Ferro"
}
else if(xp >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze"
}
else if(xp >= 2001 && xp <= 5000){
    nivelHeroi = "Prata"
}
else if(xp >= 6001 && xp <= 7000){
    nivelHeroi = "Ouro"
}
else if(xp >= 7001 && xp <= 8000){
    nivelHeroi = "Platina"
}
else if(xp >= 8001 && xp <= 9000){
    nivelHeroi = "Ascendente"
}
else if(xp >= 9001 && xp <= 10000){
    nivelHeroi = "Imortal"
}
else if(xp >10001){
    nivelHeroi = "Radiante"
}

//Saída

console.log(`O Herói com nome de ${nomeHeroi} está com ${xp} nível de XP e está no nível de ${nivelHeroi}!`)

