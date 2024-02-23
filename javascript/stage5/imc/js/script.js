import  { Modal }  from './modal.js'
import { alertError } from './alerterror.js'
import { IMC, notNumber } from './utils.js'

// Variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Events
form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)
    const inputValueIsBlank = weight == '' || height == ''

    if (weightOrHeightIsNotNumber || inputValueIsBlank) {
        alertError.open()
        return;
    }

    alertError.close()
    
    const imc = IMC(weight, height)
    const message = `Seu IMC é de ${imc.toFixed(2)}`

    Modal.textImc.innerHTML = message
    Modal.open()
}

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()