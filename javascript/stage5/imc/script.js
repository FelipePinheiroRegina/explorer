// Variables
const form = document.querySelector('form')
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')

const Modal = {
    // Variables modal 
    screenModal: document.querySelector('.modal'), 
    exitModal: document.querySelector('.x'),
    text_imc: document.querySelector('.yourImc'),

    // Methods modal
    open() {
        this.screenModal.classList.add('open')
    },
    close(){
        this.screenModal.classList.remove('open')
    }
}

// Events
form.onsubmit = event => {
    event.preventDefault()
    
    weight = weight.value
    height = height.value
    
    const imc = IMC(weight, height)
    const message = `Seu IMC é de ${imc.toFixed(2)}`

    Modal.text_imc.innerHTML = message
    Modal.open()
}

Modal.exitModal.onclick = () => Modal.close()


// Functions
const IMC = (weight, height) => {
    let yourImc = weight / ((height / 100) ** 2)
    return yourImc
}





