 

function poluitionWorning(indicationP){
    if (indicationP >= 0.3 && indicationP < 0.4){
        return console.log(`Grupo 1 pare com o funcionamento`)
    } else if (indicationP >= 0.4 && indicationP < 0.5) {
        return console.log(`Grupo 1 e 2 pare com o funcionamento`)
    } else if (indicationP >=0.5){
        return console.log(`Todos os grupos parem com o funcionamento`)
    }else {
        return console.log(`Valor aceitavel continuem normalmente`)
    }
}
poluitionWorning(0.2)