import { comunicationApiGithubUsers } from "./comunicationapi.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        comunicationApiGithubUsers.search('MaykBrito').then(user => {console.log(user)})
    }

    save() {
        localStorage.setItem('@github-favoritesVersion2:', JSON.stringify(this.entries))
    }

    async add(username) {
        // DOIS JEITOS DE FAZER A PROMESSA
        // comunicationApiGithubUsers.search(username).then(user => {console.log(user.name)})
        try {
            const userExist = this.entries.find(entry => entry.login === username)

            if(userExist){
                throw new Error('Usuário já cadastrado!')
            }

            const user = await comunicationApiGithubUsers.search(username)

            if (user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
        
    }

    load() {
           this.entries = JSON.parse(localStorage.getItem('@github-favoritesVersion2:')) || []

    }

    delete(user) {
        const filterEntries = this.entries.filter(entry => entry.login != user.login)

        this.entries = filterEntries
        this.update()
        this.save()
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
       
        this.update() 
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('#search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('#search input')
            
            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user strong').textContent = user.name
            row.querySelector('.user a').textContent = user.login
            row.querySelector('.user a').href= `https://github.com/${user.login}`

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Deseja excluir esse usuário da sua lista de favoritos?')

                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/FelipePinheiroRegina.png" alt="Imagem de Felipe">
                <div class="nameLinks">
                    <strong>Felipe Pinheiro</strong>
                    <a href="#">FelipePinheiroRegina</a>
                </div>
            </td>
            
            <td class="repositories">
                76
            </td>
            
            <td class="followers">
                155
            </td>

            <td class="remove">
                Remove
            </td>
        `
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        })
    }
}