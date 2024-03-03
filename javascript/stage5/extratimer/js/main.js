import { state } from "./state.js"
import * as f_events from './functionsevents.js'
import { buttons_timer } from "./requirebuttonsminutesseconds.js"
import { defaultTimer } from "./timer.js"
import './buttonssounds.js'

buttons_timer.addEventListener('click', (event) => {
    const functionRequire = event.target.dataset.action
    if (typeof f_events[functionRequire] != 'function'){
        return;
    }

    f_events[functionRequire]()
})

defaultTimer()