let sex = "h"
let altura = 1.60
var peso = null



function pesoideal(){
    if(sex.toUpperCase() != 'M' && sex.toUpperCase() != 'H'){
        return 'erro'
    }if (sex.toUpperCase() == 'M'){
        peso = ((62.1 * altura) - 44.7)
    } else if (sex.toUpperCase() == 'H'){
        peso = ((72.7 * altura) - 58)
    }
    return peso
}

console.log(pesoideal())