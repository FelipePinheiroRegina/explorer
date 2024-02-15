let randNumber = Math.round(Math.random() * 10)
let enterNumber = prompt('Tente advinhar o número que estou pensando entre 0 e 10? ')

let xAttempts = 1

while(Number(enterNumber) != randNumber) {
    enterNumber = prompt('Erro. Tente novamente! ')
    xAttempts++
}

if (xAttempts == 1){
    alert(`Você acertou em ${xAttempts} tentativa, o número que eu pensei foi ${randNumber}.`)
} else {
    alert(`Você acertou em ${xAttempts} tentativas, o número que eu pensei foi ${randNumber}.`)
}


