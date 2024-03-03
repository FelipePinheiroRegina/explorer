import { state } from "./state.js";
import * as timer from "./timer.js";
import * as buttons from './requirebuttonsminutesseconds.js'
import * as sounds from "./sounds.js";
import * as numberOfTimer from './requirebuttonsminutesseconds.js'

export function running() {
    state.Running = document.documentElement.classList.toggle('running')
    timer.playTimer()

    sounds.soundPlay.play()
}

export function reset() {
    state.Running = false
    document.documentElement.classList.remove('running')
    timer.defaultTimer()
}

export function moreMinutes() {
    let minutes = Number(buttons.minutes.textContent)

    minutes+= 5
    if (minutes > 60) {
        alert('60 minutos é o máximo')
        return;  
    }

    timer.defaultTimer(minutes) 
}

export function minusMinutes() {
    let minutes = Number(buttons.minutes.textContent)

    minutes-= 5
    if (minutes < 0) {
        alert('00 minutos é o mínimo')
        return;
    } 
    timer.defaultTimer(minutes) 
}

numberOfTimer.minutes.addEventListener('click', (event) => {
    numberOfTimer.minutes.setAttribute('contenteditable', true)
})

numberOfTimer.minutes.onkeypress = () => /\d/.test(event.key)