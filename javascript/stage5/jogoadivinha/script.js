// Variables
let numberRandom = Math.round(Math.random() * 10)
let showAttempts = document.querySelector('#showAttempts')
let xAttempts = 1
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let buttonTry = document.querySelector('#buttonTry')
let buttonPlayAgain = document.querySelector('#buttonPlayAgain')


// Events
buttonTry.addEventListener('click', guessPlay)

function guessPlay(){
    let numberUser = document.querySelector('#idnumber')

    if (Number(numberUser.value) == numberRandom){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        showAttempts.innerHTML = `Você acertou em ${xAttempts} tentativa(s)`
    }
    else {
        alert('Errou!')
        xAttempts++
        numberUser.value = ''
    }
}

function toggles(){
    //document.querySelector('.screen1').classList.toggle('hide')
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}