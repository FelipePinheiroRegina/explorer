export const Modal = {
    // Variables modal 
    screenModal: document.querySelector('.modal'), 
    exitModal: document.querySelector('.x'),
    textImc: document.querySelector('.yourImc'),

    // Methods modal
    open() {
        this.screenModal.classList.add('open')
    },
    close(){
        this.screenModal.classList.remove('open')
    }
}

Modal.exitModal.onclick = () => Modal.close()

window.addEventListener('keydown', escPress)

function escPress(event) {
   if (event.key === 'Escape'){
        Modal.close()
   }
}