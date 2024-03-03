import { buttons_sounds } from './requirebuttonsminutesseconds.js'
import { soundJungle, soundRain, soundStore, soundFire} from './sounds.js'
import { state } from './state.js'

buttons_sounds.addEventListener('click', (event) => {
    let requiredSoundBackground = event.target.dataset.sound
    console.log(requiredSoundBackground)

    switch(requiredSoundBackground){
        case 'jungle':
            document.querySelector('.ph-tree').classList.toggle('button-clicked')
            
            state.Mute = document.documentElement.classList.toggle('music-on')
            
            if(state.Mute){
                soundJungle.play()
                return;
            }

           soundJungle.pause()
           break;
        
        case 'rain':
            document.querySelector('.ph-cloud-rain').classList.toggle('button-clicked')
            
            state.Mute = document.documentElement.classList.toggle('music-on')
            
            if(state.Mute){
                soundRain.play()
                return;
            }

            soundRain.pause()
            break;

        case 'store':
            document.querySelector('.ph-storefront').classList.toggle('button-clicked')
            
            state.Mute = document.documentElement.classList.toggle('music-on')
            
            if(state.Mute){
                soundStore.play()
                return;
            }

            soundStore.pause()
            break;
    
        case 'fire':
            document.querySelector('.ph-campfire').classList.toggle('button-clicked')
            
            state.Mute = document.documentElement.classList.toggle('music-on')
            
            if(state.Mute){
                soundFire.play()
                return;
            }

            soundFire.pause()
            break;
    }
})