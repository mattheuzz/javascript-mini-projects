function maiorP(palavras){
    let maior = [0]
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > maior.length) {
            maior = palavras[i]
        }
    }
    return maior
}
let vet = ['medo', 'medio', 'maio']
console.log(maiorP(vet))