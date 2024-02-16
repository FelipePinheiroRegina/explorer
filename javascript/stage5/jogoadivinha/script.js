// Variables
let numberRandom = Math.round(Math.random() * 10)
// Variable for control
let xAttempts = 1
// Class for the answer
let showAttempts = document.querySelector('#showAttempts')
// Buttons
const buttonTry = document.querySelector('#buttonTry')
const buttonPlayAgain = document.querySelector('#buttonPlayAgain')
// Class sections
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


// Events
buttonTry.addEventListener('click', guessNumber)
buttonPlayAgain.addEventListener('click', playAgain)


// Functions
function guessNumber(){
    let numberUser = document.querySelector('#idnumber')
    
    if(numberUser.value == numberRandom){
        eventsToggles()
        if(xAttempts == 1){
            showAttempts.innerHTML = `Você acertou em ${xAttempts} tentativa. Muito bom!`
        }
        else{
            showAttempts.innerHTML = `Você acertou em ${xAttempts} tentativas. Precisa melhorar!`
        }
    }
    else{
        alert('Você errou, tente novamente! *__*')
        xAttempts++
        numberUser.value = ''
    }
}

function playAgain(){
    eventsToggles()
    xAttempts = 1
    document.querySelector('#idnumber').value = ''
}

function eventsToggles(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}