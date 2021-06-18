function lifeDay(anos, meses, dia){
    var totalDias = ((anos*365) + (meses*30) + dia)
    return totalDias
}

console.log(lifeDay(29, 10, 6))