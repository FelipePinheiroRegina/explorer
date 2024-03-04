import { state } from "./state.js";
import * as timer from "./timer.js";
import * as buttons from './setallbuttonsandtimer.js'
import * as sounds from "./setallsounds.js";
import * as numberOfTimer from './setallbuttonsandtimer.js'

export function running() {
    state.Running = document.documentElement.classList.toggle('running')
    timer.playTimer()

    sounds.soundPlay.play()
}

export function reset() {
    if(state.Running == false){
        state.Running = false
        document.documentElement.classList.remove('running')
        timer.defaultTimer()
    }
    
}

export function moreMinutes() {
    if(state.Running == false){
        let minutes = Number(buttons.minutes.textContent)

        minutes+= 5
        if (minutes > 60) {
            alert('60 minutos é o máximo')
            return;  
        }

        timer.defaultTimer(minutes) 
    }
    
}

export function minusMinutes() {
    if(state.Running == false){
        let minutes = Number(buttons.minutes.textContent)

        minutes-= 5
        if (minutes < 0) {
            alert('00 minutos é o mínimo')
            return;
        }    
        timer.defaultTimer(minutes) 
    }
    
}
