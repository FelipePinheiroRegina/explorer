import { buttons_sounds } from './requirebuttonsminutesseconds.js'
import { soundJungle, soundRain, soundStore, soundFire} from './sounds.js'
import { state } from './state.js'

buttons_sounds.addEventListener('click', (event) => {
    let requiredSoundBackground = event.target.dataset.sound
    console.log(requiredSoundBackground)
    document.querySelector('.ph-tree').classList.toggle('button-clicked')
    document.querySelector('.ph-cloud-rain').classList.toggle('button-clicked')
    document.querySelector('.ph-storefront').classList.toggle('button-clicked')
    document.querySelector('.ph-campfire').classList.toggle('button-clicked')
})