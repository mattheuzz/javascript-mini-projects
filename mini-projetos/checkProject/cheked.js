const rapido = document.querySelector('#rapido')
const barato = document.querySelector('#barato')
const eficiente = document.querySelector('#eficiente')
const check = document.querySelectorAll('.slide')

check.forEach(slide =>{
    slide.addEventListener('change', (e)=>{
        selecionar(e.target)
    })
})

function selecionar(click) {	
	if(eficiente.checked && barato.checked && rapido.checked) {	
		if(rapido === click) {
			rapido.checked = false;
		}
		
		if(barato === click) {
			barato.checked = false;
		}
		
		if(eficiente === click) {
			eficiente.checked = false;
		}
	}
}