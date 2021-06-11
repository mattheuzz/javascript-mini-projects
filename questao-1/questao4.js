var b = []
function impar(){
    for (var c=1; c<=100; c++){
        if (c%2 !== 0){
            b.push(c)
        }   
    }
    return b
}    

console.log(impar())