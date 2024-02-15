

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome obrigatório'
    } else {
        console.log(name)
    }
}

try {
    console.log(sayMyName())
} catch (e) {
    console.log(e)
}