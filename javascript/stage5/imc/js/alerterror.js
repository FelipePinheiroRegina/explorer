export const alertError = {
    element: document.querySelector('.error'),
    
    open() {
        this.element.classList.add('openerror')
    },

    close() {
        this.element.classList.remove('openerror')
    }
}