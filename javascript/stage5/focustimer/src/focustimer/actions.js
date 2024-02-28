import state from "./state.js"
import * as timer from "./timer.js"
import * as el from './elements.js'
import * as events from './events.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()

    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    events.setMinutes()
}

export function toggleMusic() {
    document.documentElement.classList.toggle('music-on')
    
    if(state.isMute = true) {
        sounds.bakcgroundAudio.play()
        return
    }
    sounds.buttonPressAudio.pause()
   

    
}