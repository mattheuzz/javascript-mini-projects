const btn = document.querySelector('#btn')
const LIST_FRASES = [
    {frases:[
    
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et bibendum ligula. Suspendisse eget condimentum mi, a interdum nisl. Donec.',
    
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque egestas.',
    
        'Incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit.',
    
        'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat.',
    
        'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra.',
        
        'labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt.',
    
        'Cursus eget nunc scelerisque viverra mauris in aliqu Amet mattis vulputate enim nulla aliquet porttitor lacus.'
]
}
]

const otherF = (frasesList) => {
    btn.addEventListener('click', () => {
        frasesList.map(frase => {
            let randNumber = Math.floor((Math.random() * 7))
            console.log(randNumber)
            document.querySelector('.frase-txt').innerText = frase.frases[randNumber]
        })
    })
}

otherF (LIST_FRASES)