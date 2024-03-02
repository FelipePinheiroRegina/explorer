import { state } from "./state.js"
import * as f_events from './functionsevents.js'

const buttons_events_timer = document.getElementById('buttons-timer')

buttons_events_timer.addEventListener('click', (event) => {
    const functionRequire = event.target.dataset.action
    if (typeof f_events[functionRequire] != 'function'){
        return;
    }

    f_events[functionRequire]()
})