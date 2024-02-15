alert('Enter with two numbers and see the result in five operations math')

let numberOne = prompt('Enter with the first number: ')

let numberTwo = prompt('Enter with the second number: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert('The result of sum: ' + sum)
alert('The result of subtraction: ' + sub)
alert('The result of multiplication: ' + mult)
alert('The result of division: ' + div)
alert('The result of division rest: ' + restDiv)