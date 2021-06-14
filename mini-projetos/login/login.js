function verificarInput(){
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




