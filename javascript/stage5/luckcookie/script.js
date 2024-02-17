// Variables
let clickCookie = document.querySelector('#clickCookie')
let closedCookie = document.querySelector('.closedcookie')
let openCookie = document.querySelector('.opencookie')

// Events of program
clickCookie.addEventListener('click', openCookieF)

// Functions
function openCookieF(){
    toggles()
}

function toggles(){
    closedCookie.classList.toggle('hide')
    openCookie.classList.toggle('hide')
}
