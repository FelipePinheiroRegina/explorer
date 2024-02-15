let numberRandom = Math.round(Math.random() * 10)
let contador = 1

let winner = document.getElementById('winner')
let screen1 = document.getElementById('screen1')
let screen2 = document.getElementById('screen2')

function adivinhar() {
    let numberUser = document.getElementById('idnumber')
    numberUser = Number(numberUser.value)
    
    if (numberUser === numberRandom) {
        if (contador == 1) {
            alert(`Você acertou em ${contador} tentativa`)
            
        }
        else {
            alert(`Você acertou em ${contador} tentativas`)
        } 
    }
    else{
        alert('Errou! tente denovo.')
        contador++
    }  
}

