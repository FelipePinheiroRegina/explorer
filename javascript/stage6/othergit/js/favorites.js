export class githubUsers {
   
}

export class FavoritesDatas {
    constructor(bodyApp) {
        this.bodyApp = document.querySelector(bodyApp)
        
    }

}

export class FavoritesView extends FavoritesDatas{
    constructor(bodyApp) {
        super(bodyApp)

        this.tbody = this.bodyApp.querySelector('table tbody')
        
        this.load()
        this.update()
    }

    update() {
        this.removeAlltr()

        this.ArrayOfTheUser.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://www.github.com/${user.login}.png`
            row.querySelector('.user img').alt = `${user.name}`
            
            row.querySelector('.link strong').textContent = `${user.name}`
            row.querySelector('.link a').href = `https://github.com/${user.login}`
            row.querySelector('.link a').textContent = `${user.login}`

            row.querySelector('.repositories').textContent = `${user.public_repos}`

            row.querySelector('.followers').textContent = `${user.followers}`
            console.log(row)

            this.tbody.append(row)
        })
    }

    load() {
        this.ArrayOfTheUser = [
            {
                "login": "RichardPinheiro",
                "name": "Richard Pinheiro",
                "public_repos": 76,
                "followers": 43,
            }
        ]
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `<td class="user">
        <img src="https://github.com/FelipePinheiroRegina.png" alt="Imagem de felipe">
        
        <div class="link">
            <strong>Felipe Pinheiro</strong>
            <a href="https://github.com/FelipePinheiroRegina">FelipePinheiroRegina</a>
        </div>
        </td>

        <td class="repositories">
            1000
        </td>

        <td class="followers">
            1640
        </td>

        <td class="remove">
            <i class="ph ph-user-minus"></i>
        </td>`
          
        return tr
    }

    removeAlltr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        })
    }
}