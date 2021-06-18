function cash(total){
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0
    
    
    while((total / 100) >= 1){
        total -= 100
        n100 += 1
    }

    while((total / 50) >= 1){
        total -= 50
        n50 += 1
    }

    while((total / 10) >= 1){
        total -= 10
        n10 += 1
    }

    while((total / 5) >= 1){
        total -= 5
        n5 += 1
    }

    while((total / 1) >= 1){
        total -= 1
        n1 += 1
    }  

    console.log(`É preciso de ${n100} nota de 100 reais, ${n50}, nota de 50 reais, ${n10} nota de 10 reais, ${n5} nota de 5 reais e ${n1} notas de 1 real.`)
}

cash(280)
