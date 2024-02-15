let numberOne, numberTwo, sum, sub, mult, div, restDiv

alert(`
Bem vindo ao exercicío 01
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
5. Resto
6. Par ou ímpar
7. Iguais ou diferentes
`)

numberOne = Number(prompt('Entre com o primeiro número: '))
numberTwo = Number(prompt('Entre com o segundo número: '))

sum = numberOne + numberTwo
sub = numberOne - numberTwo
mult = numberOne * numberTwo
div = numberOne / numberTwo
restDiv = numberOne % numberTwo

const oddOreven = (sum) => {
    if (sum % 2 == 0) {
        return 'Par'
    } 
    else {
        return 'Ímpar'
    }
}

const alikeOrdifferent = (nOne, nTwo) => {
    if (nOne == nTwo) {
        return 'Iguais'
    }
    else {
        return 'Diferentes'
    }
}

alert(`
1. Soma: ${numberOne} + ${numberTwo} = ${sum}.
2. Subtração: ${numberOne} - ${numberTwo} = ${sub}.
3. Multiplicação: ${numberOne} * ${numberTwo} = ${mult}.
4. Divisão: ${numberOne} / ${numberTwo} = ${div}.
5. Resto da divisão: ${numberOne} % ${numberTwo} = ${restDiv}.
`)

alert(`
6. Par ou Ímpar:
    O número ${sum} é ${oddOreven(sum)}

7. Iguais ou Diferentes:
    Os números ${numberOne} e ${numberTwo} são ${alikeOrdifferent(numberOne, numberTwo)}
`)
