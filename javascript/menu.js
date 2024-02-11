/*
Criar um menu onde tenha três opções; 1 cadastrar itens; 2 ver itens, se nao tiver nada, mostrar mensagem 'nao existe itens cadastrados'; 3 encerrar menu
*/

let option
let list = new Array()

while (option != 3) {
    option = Number(prompt(`
    Opções do menu

    1. cadastrar itens na lista
    2. ver itens na lista
    3. encerrar menu
    `))

switch (option) {
    case 1:
        let cadMore 
        while (cadMore != 'N') {
            list.push(prompt('Nome do item: '))
            cadMore = prompt('Deseja cadastrar mais itens? [ S / N ]: ').toUpperCase()
            
        }
        break
    
    case 2:
        if (list.length == 0) {
            alert('Não existe itens cadastrados na lista')
        } else {
            let listOrganization = list.join(', ')
            alert(listOrganization)
        }
        break
    
    case 3:
        alert('Good bye, see you later!')
        break
    
    default:
        alert('Opção inválida. Tente outra vez!')
        break 
}


    /*if (option == 1) {
        let cadMore 
        while (cadMore != 'N') {
            list.push(prompt('Nome do item: '))
            cadMore = prompt('Deseja cadastrar mais itens? [ S / N ]: ').toUpperCase()
            
        }
    }
    else if (option == 2) {
        if (list.length == 0) {
            alert('Não existe itens cadastrados na lista')
        } else {
            let listOrganization = list.join(', ')
            alert(listOrganization)
        }
        
    }
    else if (option == 3) {
        alert('Good bye, see you later!')
    } 
    else {
        alert('Opção inválida. Tente outra vez!')
    }*/
}