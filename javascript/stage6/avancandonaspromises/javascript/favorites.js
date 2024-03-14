export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
        this.entries = [{
            login: 'felipe-pinheiro98',
            name: 'Felipe Pinheiro',
            public_repos: '76',
            fallowers: '12000'
        },
        {
            login: 'RichardPinheiro',
            name: 'Richard Pinheiro',
            public_repos: '89',
            fallowers: '120500'
        }
        ]
    }

    delete(user){
        const filteredEntries = this.entries.filter(userRemove => userRemove.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }
}

export class FavoritesView extends Favorites{
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update() {
        this.removeAlltr()

        this.entries.forEach(user => {
           const row = this.createRow()
           
           row.querySelector('.users img').src = `https://github.com/${user.login}.png`
           row.querySelector('.users img').alt = `Imagem de ${user.name}`
           row.querySelector('.users p').textContent = user.name
           row.querySelector('.users span').textContent = user.login
           row.querySelector('.repositories').textContent = user.public_repos 
           row.querySelector('.fallowers').textContent = user.fallowers

           row.querySelector('.times').onclick = () => {
            const isTrue = confirm('Deseja excluir esse usuário?')
            if(isTrue){
                this.delete(user)
            }
       }

           this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = ` 
        <td class="users">
            <img src="https://www.github.com/RichardPinheiro.png" alt="Imagem de Felipe">

            <a href="https://www.github.com/RichardPinheiro">
                <p>Richard Pinheiro</p>
                <span>RichardPinheiro</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="fallowers">
            10000
        </td>
        <td class="times">
            &times;
        </td>
        `
        return tr
    }

    removeAlltr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}

