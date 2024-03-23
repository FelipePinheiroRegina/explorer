export class comunicationApiGithubUsers {
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`
        
        return fetch(endpoint)
        .then(data => data.json())
        .then(( {login, name, public_repos, followers} ) => ( {
            login,
            name,
            public_repos,
            followers
        } ))
    } 
    
    
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        comunicationApiGithubUsers.search('MaykBrito').then(user => {console.log(user)})
    }

    load() {
           this.entries = JSON.parse(localStorage.getItem('@github-favoritesVersion2:')) || []

    }

    delete(user) {
        const filterEntries = this.entries.filter(entry => entry.login != user.login)

        this.entries = filterEntries
        this.update()
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
       
        this.update() 
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