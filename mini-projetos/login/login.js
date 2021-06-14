var usuario = document.querySelector('#usuario')
var senha = document.querySelector('#senha')
var logar = document.querySelector('#logar')

const executar = () => {
    logar.addEventListener('click', () => {
        return(`Seu email é: ${usuario.value} 
        e sua senha é: ${senha.value}`)
    })
}

const checarInput = () => {
    usuario.addEventListener('input', () =>{
        senha.addEventListener('input', () => {
            if(usuario.value.length > 0 && senha.value.length > 0){
                logar.disabled = false
                executar()
            }
        })
    })
}


checarInput()

/* function verificarInput(){
    if (usuario.value == 0 || usuario.value.length < 4){
        document.querySelector('.invalido').innerHTML = ("Minimo 4 caracteres para login e minimo 6 digitos para senha")
        return false
    } else if (senha.value == 0 || senha.value.length < 6){
        document.querySelector('.invalido').innerHTML = ("Minimo 4 caracteres para login e minimo 6 digitos para senha")
        return false
    } else{
        var nome = document.querySelector('#usuario')
        var nome1 = nome.value
        var senha = document.querySelector('#senha')
        var senha1 = senha.value
        window.alert(`Nome: ${nome1} e Senha: ${senha1}`)

    }
    
}


 */

