import { buttons_sounds } from './setallbuttonsandtimer.js'
import { soundJungle, soundRain, soundStore, soundFire} from './setallsounds.js'
import { state } from './state.js'
import * as SoundsFunctions from './functionssoundblock.js'

buttons_sounds.addEventListener('click', (event) => {
    let requiredSoundBackground = event.target.dataset.sound
    if (typeof SoundsFunctions[requiredSoundBackground] != 'function'){
        return;
    }
    
    SoundsFunctions[requiredSoundBackground]()  
})
