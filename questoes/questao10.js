function divisao(a, b){
    if (b===0){
        return "valor invalido"
    }else{
        var resultado = a/b
        var resto = a%b
        return `o resultado da divisão é ${resultado} com resto de ${resto}`
    }
}

console.log(divisao(3, 0))