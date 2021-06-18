function normalDate(dias){
    let ano = parseInt(dias / 365)
    let mes = parseInt((dias % 365)/ 30)
    let dia = (dias % 365) % 30

    return`${dia}/${mes}/${ano}`
}

console.log(normalDate(10891))