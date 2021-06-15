let li_filme = document.querySelector('#li_filme')

const LIST_FILMES = [{nome: 'O Corvo', img: 'imagens/corvo.jpg', ano:'1994'}, 
    {nome: 'Brilho eterno de uma mente sem lembranças', img:'imagens/brilho.jpg', ano:'2004'},
    {nome: 'Cemiterio Maldito', img:'imagens/cemiterio.jpg', ano: '1989'},
    {nome: 'Harry Potter', img:'imagens/hp.jpg', ano: '2001'},
    {nome: 'Senhor dos Aneis', img:'imagens/LotR.jpg', ano:'2001'},
    {nome:'Shrek', img:'imagens/shrek.jpg', ano:'2001'},
    {nome: 'Edward Mãos de Tesoura', img:'imagens/tesoura.jpg', ano:'1990'}
]
​const factoryFilmes = (list) => {
    const filmesElements = list.map(filme =>`
        <img src="${filme.img}">
        <div>
            <h2>${filme.nome}</h2>
            <p>${filme.ano}</p>
        </div>
        <hr>
      `
    )  
  ​
    li_filme.innerHTML = filmesElements
}

const cleanFilter =() =>{
    li_filme.innerHTML = ''
}

const filter = (value) => {
    const newList = LIST_FILMES.filter(filme => filme.nome.includes(value))
  ​
    factoryFilmes(newList)
}

const heandleFilmes = ({target})=>{
    const {value} = target
    cleanFilter()
    filter(value)
}

document.querySelector('#filme').addEventListener('change', (event)=>{
    heandleFilmes(event)
})

const filmeIni = ()=> {
    factoryFilmes(LIST_FILMES)
}

filmeIni()
  ​
