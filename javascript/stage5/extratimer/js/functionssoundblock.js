import * as sounds from './setallsounds.js'

export function jungle(){
    document.querySelector('.ph-tree').classList.toggle('button-clicked')

    let have = document.querySelector('.ph-tree')
    
    if(have.classList.contains('button-clicked')){
        sounds.soundJungle.play()
    }else{
        sounds.soundJungle.pause()
    }
}

export function rain(){
    document.querySelector('.ph-cloud-rain').classList.toggle('button-clicked')

    let have = document.querySelector('.ph-cloud-rain')

    if(have.classList.contains('button-clicked')){
        sounds.soundRain.play()
    }
    else{
        sounds.soundRain.pause()
    }
}

export function store(){
    document.querySelector('.ph-storefront').classList.toggle('button-clicked')

    let have = document.querySelector('.ph-storefront')

    if(have.classList.contains('button-clicked')){
        sounds.soundStore.play()
    }
    else{
        sounds.soundStore.pause()
    }
}

export function fire(){
    document.querySelector('.ph-campfire').classList.toggle('button-clicked')

    let have = document.querySelector('.ph-campfire')

    if(have.classList.contains('button-clicked')){
        sounds.soundFire.play()
    }
    else{
        sounds.soundFire.pause()
    }
}