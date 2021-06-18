const LIST_PRODUCTS = [
    {
        name: 'PS5',
        code: '0001',
        price: 4750.00,
        quantity: 1
    },
    {
        name: 'XBOX-series-x',
        code: '0002',
        price: 4300.00,
        quantity: 1
    }
]

function calcIPI(ipi){
    return ((ipi/100)+1)
}

function fullCheck (list, ipi){
    let check = 0
    let finalCheck = 0
    list.map(lp =>{
        check += (lp.price * lp.quantity)
        finalCheck = (check * calcIPI(ipi))
    })

    return console.log(`O valor total é de ${finalCheck} R$`)
}

function itensProducts (products) {
    const product = products.map(it => {
        console.log(`
        Produto: ${it.name}
        Codigo: ${it.code}
        Valor: ${it.price}
        `)
    })
}

const init = () =>{
    itensProducts(LIST_PRODUCTS)
    fullCheck(LIST_PRODUCTS, 40)
}
init()