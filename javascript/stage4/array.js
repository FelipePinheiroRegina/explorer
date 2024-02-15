/*
let array = ['a', 'b', 'c']
console.log(array)

let new_array = new Array('a', 'b', 'c')
console.log(new_array)

// Contando e manipulando array

let lista = [
    'alo',
    {name: 'felipe'},
    () => {return 'Arrow function'}
]

console.log(lista[1]['name']) 

console.log(lista.length) // Conta quantos elementos tem no array

console.log(lista[2]()) // executo a função básica que existe dentro do indice 2 do meu array

// fatiando cada letra de uma frase e colocando em um array

let phrase = 'paralelepipedo'

let splitcaractere = Array.from(phrase)

console.log(splitcaractere)
*/

// ========================
let techs = new Array('html', 'css', 'js')

// adicionar no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift('react')
// remover no fim
//techs.pop()
// remover no começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 2))

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(0, 1)

// encontrar a posição de um item no array
let index = techs.indexOf('nodejs')
console.log(index)
techs.splice(index, 1)

console.log(techs)
