let answer = document.getElementById('answer')

function helloWorld() {
   answer.innerText = 'Hello, World!'
}

function Somar() {
    let number1 = document.getElementById('idn1')
    let number2 = document.getElementById('idn2')

    number1 = Number(number1.value)
    number2 = Number(number2.value)

    answer.innerText = `${number1} + ${number2} é ${number1 + number2}`
}

function enumber() {
    let isnumb = document.getElementById('idenumb')

    isnumb = isnumb.value

    let isNumber

    for (let i = 1; i <= 9; i++) {
        if(isnumb.includes(i)){
            isNumber = `${isnumb} é um número`
            break
        }
        else {
            isNumber = `${isnumb} não é um número`
        }
    }
    
    answer.innerHTML = isNumber
    
}

function isString(){
    let stringOrNumber = document.getElementById('idstring')

    stringOrNumber = stringOrNumber.value

    let isString

    for (let i = 1; i <= 9; i++) {
        if (stringOrNumber.includes(i)){
            isString = `${stringOrNumber} não é String`
            break
        }
        else {
            isString = `${stringOrNumber} é String`
        }
    }

    answer.innerText = isString
}

function isBoolean() {
    let isBoolean = document.getElementById('idboo')
    isBoolean = isBoolean.value.toLowerCase()
    
    if (isBoolean.includes('true')){
        isBoolean = 'Booleano'
    }
    else if (isBoolean.includes('false')){
        isBoolean = 'Booleano'
    }
    else {
        isBoolean = 'Não é Booleano'
    }

    answer.innerText = isBoolean
}

function subtracao() {
    let numberOne = document.getElementById('idnumber1')
    let numberTwo = document.getElementById('idnumber2')

    numberOne = Number(numberOne.value)
    numberTwo = Number(numberTwo.value)

    answer.innerText = `${numberOne} - ${numberTwo} é ${numberOne - numberTwo}`
}

function multiplicar() {
    let numberOne = document.getElementById('idmult1')
    let numberTwo = document.getElementById('idmult2')

    numberOne = Number(numberOne.value)
    numberTwo = Number(numberTwo.value)

    answer.innerText = `${numberOne} x ${numberTwo} é ${numberOne * numberTwo}`
}

function dividir() {
    let numberOne = document.getElementById('iddiv1')
    let numberTwo = document.getElementById('iddiv2')

    numberOne = Number(numberOne.value)
    numberTwo = Number(numberTwo.value)

    answer.innerText = `${numberOne} / ${numberTwo} é ${numberOne / numberTwo}`
    
}

function par() {
    let isPar = document.getElementById('idispar')

    isPar = Number(isPar.value)

    if (isPar % 2 == 0) {
        answer.innerText = `${isPar} é Par`
    }
    else {
        answer.innerText = `${isPar} não é Par`
    }
}

function impar() {
    let isImpar = document.getElementById('idisimpar')

    isImpar = Number(isImpar.value)

    if (isImpar % 2 == 1) {
        answer.innerText = `${isImpar} é Impar`
    }
    else {
        answer.innerText = `${isImpar} não é Impar`
    }
}

answer.innerText = 'Bem - Vindo'



