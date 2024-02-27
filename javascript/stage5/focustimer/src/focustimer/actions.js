import state from "./state.js"
import { countDown } from "./timer.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    countDown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function set() {

}

export function toggleMusic() {
    document.documentElement.classList.toggle('music-on')
}