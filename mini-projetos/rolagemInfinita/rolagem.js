const box = document.querySelector('.c-box')

const TITULO = [
    'Lorem ipsum dolor.', 
    'Cras pellentesque risus et lacus', 
    'Morbi vestibulum ligula vitae nibh', 
    'Mauris tincidunt mauris at consectetur.' 
]

const TXT = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula arcu vitae diam convallis, id porta risus vulputate. Nunc congue massa ac lacus hendrerit auctor',
    'Fusce consequat, lorem quis molestie posuere, ipsum tortor pulvinar lorem, vel laoreet tellus lorem sed mauris. Aliquam ullamcorper enim urna',
    'Sed tincidunt velit lorem, ut congue libero gravida non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
    'Mauris et scelerisque sapien. Proin euismod porta mollis. Fusce dapibus ligula est, a fermentum turpis sollicitudin nec. Maecenas dui erat, finibus eu efficitur non'
]

window.addEventListener('scroll', () => {
	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		criarPost()
	}
});

function criarPost() {
	const post = document.createElement('section')
    post.classList.add('c-box')
	post.innerHTML = `
        <div>
                <h2>${pickRandom(TITULO)}</h2>
                <p>${pickRandom(TXT)}</p>
            </div>
	`
	box.appendChild(post)
}



function pickRandom(list)    {
	return list[Math.floor(Math.random() * list.length)]
    
}

criarPost()
criarPost()
criarPost()
criarPost()
criarPost()
criarPost()
criarPost()
criarPost()
criarPost()