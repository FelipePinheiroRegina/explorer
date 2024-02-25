let darkMode = true
let activeOrDisable = document.getElementById('darkOrlight')

activeOrDisable.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    
    const mode = darkMode ? 'Light' : 'Dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})