import * as functionEvents from './functionsevents.js'
import * as NumberOfTimer from './requirebuttonsminutesseconds.js'
import { state } from './state.js'
import * as sounds from './sounds.js'

export function defaultTimer(minutes, seconds){
   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   NumberOfTimer.minutes.textContent = String(minutes).padStart('2', 0)
   NumberOfTimer.seconds.textContent = String(seconds).padStart('2', 0)
}

export function playTimer(){
    if(!state.Running){
        return;
    }
    
    let minutes = Number(NumberOfTimer.minutes.textContent)
    let seconds = Number(NumberOfTimer.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }


    if(minutes < 0){
        sounds.soundFinish.play()
        functionEvents.reset()
        return;
    }


    defaultTimer(minutes, seconds)
    setTimeout(() => playTimer(), 1000)
}