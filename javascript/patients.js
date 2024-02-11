const patients = [
    // patients one
    {
        name: 'Felipe Pinheiro',
        age: 25,
        weight: 83.8,
        height: 1.81
    },
    //patients two
    {
        name: 'Renato Cariani',
        age: 42,
        weight: 100.8,
        height: 1.91
    },
    //patients three
    {
        name: 'Gustavo Guanabara',
        age: 39,
        weight: 100.1,
        height: 1.95
    },
]

for (let patient of patients) {
    alert(`
        Nome do paciente: ${patient.name}
        Idade do paciente: ${patient.age}
        Peso do paciente: ${patient.weight.toFixed(3) + ' kg'}
        Altura do paciente: ${patient.height + ' cm'}
    `)    
}
