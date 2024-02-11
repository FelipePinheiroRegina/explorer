let patients = []
let option

const IMC = (weight, height) => {
    let imc = weight / (height ** 2)
    return imc.toFixed(2)
}

while (option != 3) {
    option = Number(prompt(`
    Olá, bem vindo ao menu de pacientes.
    Hospital: Viva lá vida

    [ 1 ] Mostrar pacientes
    [ 2 ] Cadastrar pacientes
    [ 3 ] Encerrar
    `))

    switch (option) {
        
        case 1:
            if (patients.length == 0) {
                alert('Não há nenhum paciente cadastrado!')
            } 
            else {
                for (let patient of patients) {
                    alert(`
                        Nome do paciente: ${patient.name}
                        Idade do paciente: ${patient.age}
                        Peso do paciente: ${patient.weight.toFixed(3) + ' kg'}
                        Altura do paciente: ${patient.height + ' cm'}
                    `)    
                }
                let verImc = prompt('Deseja ver o IMC de qual paciente? ')
                
                for (let patient of patients) {
                    if(verImc.toLowerCase() == patient.name.toLowerCase()){
                        alert(`O ${patient.name}, tem o IMC de: ${IMC(patient.weight, patient.height)}`)
                    }
                }
                
            }
            break
        
        case 2:
            let cadMore
            while (cadMore != 'n') {
                patients.push({
                    name: prompt('Nome do paciente: '),
                    age: Number(prompt('Idade do paciente: ')),
                    weight: Number(prompt('Peso do paciente, Ex.: 100.1 kg: ')),
                    height: Number(prompt('Altura do paciente, Ex.: 1.90 cm: '))
                })
                cadMore = prompt('Deseja cadastrar mais pacientes, [ s ] / [ n ]: ').toLowerCase()
            }
            break
        
        case 3:
            alert('Encerrando programa de pacientes...')
            option = 3
            break

        default:
            alert('ERRO. TENTE UMA OPÇÃO VALIDA.')    
    }
}