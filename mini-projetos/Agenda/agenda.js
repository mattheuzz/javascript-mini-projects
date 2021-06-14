(()=>{
    var resfilme = document.querySelector('#resfilme')
    var filme = document.querySelector('#filme')

    var filmes = [{nome: 'O Corvo', img: 'imagens/corvo.jpg', ano:'1994'}, 
        {nome: 'Brilho eterno de uma mente sem lembranças', img:'imagens/brilho.jpg', ano:'2004'},
        {nome: 'Cemiterio Maldito', img:'imagens/cemiterio.jpg', ano: '1989'},
        {nome: 'Harry Potter', img:'imagens/hp.jpg', ano: '2001'},
        {nome: 'Senhor dos Aneis', img:'imagens/LotR.jpg', ano:'2001'},
        {nome:'Shrek', img:'imagens/shrek.jpg', ano:'2001'},
        {nome: 'Edward Mãos de Tesoura', img:'imagens/tesoura.jpg', ano:'1990'}
    ]

    function rfilme(pegarfilmes){
        function item(pegarfilme){
            return `
            
            <div class="js">
                <img src=${pegarfilme.img}>
                <p>${pegarfilme.nome}</p>       
                <p>${pegarfilme.ano}</p>	
            </div>
            `
        }
    
        
})()
