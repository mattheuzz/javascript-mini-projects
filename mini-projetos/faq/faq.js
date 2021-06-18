let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let conteudo1 = document.querySelector('.conteudo1')
let conteudo2 = document.querySelector('.conteudo2')
let conteudo3 = document.querySelector('.conteudo3')
let conteudo4 = document.querySelector('.conteudo4')
let questions1 = document.querySelector('.questions1')
let questions2 = document.querySelector('.questions2')
let questions3 = document.querySelector('.questions3')
let questions4 = document.querySelector('.questions4')

function toogle(event){
    if (conteudo1.classList.contains('show')){
        conteudo1.classList.remove('show')
        questions1.style.backgroundColor = '#fff'
        btn1.classList.remove('btn-show')
    } else{
        btn1.classList.add('btn-show')
        conteudo1.classList.add('show')
        questions1.style.backgroundColor = 'rgb(196, 192, 192)'
    }
}

function toogle2(event){
    if (conteudo2.classList.contains('show')){
        conteudo2.classList.remove('show')
        btn2.classList.remove('btn-show')
        questions2.style.backgroundColor = '#fff'
    } else{
        conteudo2.classList.add('show')
        btn2.classList.add('btn-show')
        questions2.style.backgroundColor = 'rgb(196, 192, 192)'
    }
}

function toogle3(event){
    if (conteudo3.classList.contains('show')){
        conteudo3.classList.remove('show')
        btn3.classList.remove('btn-show')
        questions3.style.backgroundColor = '#fff'
    } else{
        conteudo3.classList.add('show')
        btn3.classList.add('btn-show')
        questions3.style.backgroundColor = 'rgb(196, 192, 192)'
    }
}

function toogle4(event){
    if (conteudo4.classList.contains('show')){
        conteudo4.classList.remove('show')
        btn4.classList.remove('btn-show')
        questions4.style.backgroundColor = '#fff'
    } else{
        conteudo4.classList.add('show')
        btn4.classList.add('btn-show')
        questions4.style.backgroundColor = 'rgb(196, 192, 192)'
    }
}
function init(){
    btn1.addEventListener('click', toogle, false)
    btn2.addEventListener('click', toogle2, false)
    btn3.addEventListener('click', toogle3, false)
    btn4.addEventListener('click', toogle4, false)
}
init()