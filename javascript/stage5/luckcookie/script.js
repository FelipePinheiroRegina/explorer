// Variables
let clickCookie = document.querySelector('#clickCookie')
let closedCookie = document.querySelector('.closedcookie')
let openCookie = document.querySelector('.opencookie')
let buttonOpenCookie = document.querySelector('#buttonOpenCookie')
let luck = document.querySelector('.luck')
const frases = [
    'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.',
    
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    
    'Não faças aos outros o que não queres que os outros te façam a ti.',

    'Mil cairão ao teu lado, dez mil à tua direita. Mas tu não serás atingido.',

    'O amor é gratuito, mas não é barato.',

    'E conhecereis a verdade e a verdade vos libertará.',

    'De que serve ao homem conquistar o mundo inteiro se perder a alma?',

    'Vinde a mim todos vós que estais cansados e eu vos aliviarei, porque meu jugo é suave e o meu fardo é leve.',

    'Quem quiser ser líder deve ser primeiro servo. Se você quiser liderar, deve servir.',

    'Há mais felicidade em dar do que receber.',

    'Que mérito vocês terão se amarem aos que os amam? Até os pecadores amam aos que os amam.'
]

// Events of program
clickCookie.addEventListener('click', openCookieF)
buttonOpenCookie.addEventListener('click', openCookieAgain)

// Functions
function openCookieF(){
    toggles()
    let sort = Math.round(Math.random() * 10)
    luck.innerHTML = `${frases[sort]}`
}

function openCookieAgain() {
    toggles()
}

function toggles(){
    closedCookie.classList.toggle('hide')
    openCookie.classList.toggle('hide')
}
