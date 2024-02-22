import  { Modal }  from './modal.js'

// Variables
const form = document.querySelector('form')
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')

// Events
form.onsubmit = event => {
    event.preventDefault()
    
    weight = weight.value
    height = height.value

    const showAlertError = isNaN(weight) || isNaN(height)
    const blank = weight == '' || height == ''

    if(showAlertError || blank) {
        alert('mostrar error')
        return;
    }
    
    const imc = IMC(weight, height)
    const message = `Seu IMC é de ${imc.toFixed(2)}`

    Modal.textImc.innerHTML = message
    Modal.open()
}

// Functions
const IMC = (weight, height) => {
    let ImcCalc= weight / ((height / 100) ** 2)
    return ImcCalc
}

function notNumber(value){
    return isNaN(value)
}






