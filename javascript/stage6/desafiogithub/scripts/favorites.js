export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.load()
    }

    load() {
        this.entries = [{
            "login": "RichardPinheiro",
            "name": "Richard Pinheiro",
            "public_repos": 76,
            "followers": 1200
        }]
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