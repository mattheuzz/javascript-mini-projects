function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        
        inicia(){
            this.clicaBotoes()
        },

        clearDisplay(){
            this.display.value = ''
        },

        realizaConta() {
            let conta = this.display.value;
      
            try {
              conta = eval(conta)      
              this.display.value = String(conta)
            } catch(e) {
              alert('Conta inválida')
              return
            }
          },

        clicaBotoes(){
            document.addEventListener('click', e => {
                const el = e.target
        
                if(el.classList.contains('bt-num')) {
                  this.btParaDisplay(el.innerText)
                }
        
                if(el.classList.contains('bt-del')) {
                  this.clearDisplay()
                }
        
                if(el.classList.contains('bt-eq')) {
                  this.realizaConta()
                }
        
                this.display.focus()
              })
            },
        btParaDisplay(valor) {
            this.display.value += valor
            }
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()