let = numeroRandom = []
function arrayRandom(){
    for (c=1; c<=10; c++){ 
        let n = Math.floor(Math.random() * 100 + 1)
        numeroRandom.push(n)
    }
    numeroRandom.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
    return `A sequencia é ${numeroRandom} 
O menor numero é ${numeroRandom[0]} e o maior numero é ${numeroRandom[9]}`

}

console.log(arrayRandom())
