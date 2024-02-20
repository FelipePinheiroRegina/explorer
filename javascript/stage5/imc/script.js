// Variables
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const form = document.querySelector('form')

// Events
form.onsubmit = event => {
    event.preventDeafult()

}

// Functions
function IMC(weight, height){
    let imc = height ** 2 / weight
    return imc
}

console.log(80 / 181 ** 2)
