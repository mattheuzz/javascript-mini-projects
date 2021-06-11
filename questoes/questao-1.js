function parimpar(a=0, b=0){    
    if(a%2 === 0 && b%2 === 0){
        return("a e b são Par")
    } else if(a%2 > 0 && b%2 > 0){
        return("a e b são Impar")
    } else if (a%2 === 0 && b%2 > 0){
        return("a é Par e b é Impar")
    } else if (a%2 > 0 && b%2 === 0){
        return("a é Impar e b é Par")
    } else{
        return ("entrada invalida, entr com os dois argumentos")
    }
}
console.log(parimpar(7,))