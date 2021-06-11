var a = []
function soma(){
    for(c = 1; c <= 10; c++){
        var b =+ c
        a.push(b)
        
    }
    var total = a.reduce((total, currentElement) => total + currentElement)
    return `sequencia ${a} com soma ${total} `
    
}

console.log(soma())