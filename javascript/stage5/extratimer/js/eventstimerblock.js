import * as functionTimer from './functionstimerblock.js'
import { buttons_timer } from "./setallbuttonsandtimer.js"

buttons_timer.addEventListener('click', (event) => {
    const functionRequire = event.target.dataset.action
    if (typeof functionTimer[functionRequire] != 'function'){
        return;
    }

    functionTimer[functionRequire]()
})