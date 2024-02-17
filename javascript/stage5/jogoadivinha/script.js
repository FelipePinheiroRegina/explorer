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
buttonPlayAgain.addEventListener('click', playAgain)
document.addEventListener('keypress', keyAgain)

// Functions
function guessPlay(e){
    e.preventDefault()

    let numberUser = document.querySelector('#idnumber')
    
    if(numberUser.value == ''){
        alert('insira um número!')
    }
    else{
        if (Number(numberUser.value) == numberRandom){
            toggles()
            showAttempts.innerHTML = `Você acertou em ${xAttempts} tentativa(s)`
        }
        else {
            alert('Errou!')
            xAttempts++
            numberUser.value = ''
        }
    }  
}

function playAgain(){
    toggles()
    xAttempts = 1
    let fieldBlank = document.querySelector('#idnumber').value = ''
}

function keyAgain(press){
    if(press.key === 'Enter' && screen1.classList.contains('hide')){
        playAgain()
    }
}

function toggles(){
    //document.querySelector('.screen1').classList.toggle('hide')
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}