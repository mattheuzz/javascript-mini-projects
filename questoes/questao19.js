function time(sec){
    let hour = parseInt(sec / 3600)
    let minutes = parseInt((sec % 3600)/60)
    let second = (sec%3600)%60
    return `Horas: ${hour} | Minutos: ${minutes} | Segundos: ${second}`
}

console.log(time(50000))