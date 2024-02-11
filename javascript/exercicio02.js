const students = [
    {
    name: 'Felipe',
    nota1: 7,
    nota2: 9,
    },

    {
        name: 'Ana',
        nota1: 3,
        nota2: 4,
    },

    {
        name: 'Olavo',
        nota1: 6,
        nota2: 8,
    },

    {
        name: 'Ted',
        nota1: 1,
        nota2: 4,
    }
]
let everage

const calcEverage = (n1, n2) => {
    everage = (n1 + n2) / 2
    return everage
}

const aprove = (name, everage) => {
    let approved = everage >= 7.0
    let repproved = everage < 7.0
    
    if (approved) {
        return `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
    }
    else if (repproved) {
        return `Não foi dessa vez, ${name}! Tente novamente!`
    }
}

for (let student of students) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${calcEverage(student.nota1, student.nota2).toFixed(1)}
    
    ${aprove(student.name, everage)}
    `) 
}
