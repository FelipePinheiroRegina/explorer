export class githubUsers{
    static search(username) {  
        const endpoint = `http://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({login, name, public_repos, followers}))
    }
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        githubUsers.search('felipe-pinheiro98').then(user => console.log(user))
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    async add(username) {
        const user = await githubUsers.search(username)
        console.log(user)
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
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
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
           row.querySelector('.followers').textContent = user.followers

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

