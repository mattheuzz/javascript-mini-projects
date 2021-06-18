var digitar = document.querySelector('#digitar')
var resultado = document. queryCommandEnabled('.resultado')
function teste(){
    digitar.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter'){
            console.log('tecla pressionada')
        }
    })
}
teste()