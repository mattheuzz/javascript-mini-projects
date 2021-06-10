function criandoD(){
    let a = [0, 3, 99, 44, -1] 
    let b = [4, 6, 9, 10, -349]  
    let c = [1, 1, 1, 99, 37]

    let d = a.concat(b, c)


    d.sort((n, m) => {
        if (n > m) return -1
        if (n < m) return 1
        return 0
    })
    return d
}
console.log(criandoD())
