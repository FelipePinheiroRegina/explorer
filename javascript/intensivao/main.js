let answer = document.getElementById('answer')

function helloWorld() {
   answer.innerText = 'Hello, World!'
}

function Somar() {
    let number1 = document.getElementById('idn1')
    let number2 = document.getElementById('idn2')

    number1 = Number(number1.value)
    number2 = Number(number2.value)

    answer.innerText = number1 + number2
}

function enumber() {
    let enumb = document.getElementById('idenumb')

    enumb = Number(enumb.value)
    answer.innerHTML = typeof enumb
    if (enumb === Number) {
        answer.innerHTML = 'é um número'
    }
    else {
        answer.innerHTML = 'não é um número'
    }
}



