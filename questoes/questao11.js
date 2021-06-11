let = numeroRandom = []
function nRandom(){
    for (c=1; c<=10000; c++){ 
        let n = Math.floor(Math.random() * 10000 + 1)
        numeroRandom.push(n)
    }
    var total = numeroRandom.reduce((total, currentElement) => total + currentElement)
    return `sequencia ${numeroRandom} 
com soma ${total} `
}

console.log(nRandom())