export class githubUsers {
   static search(userlogin) {
        const endpoint = `https://api.github.com/users/${userlogin}`

        return fetch(endpoint)
        .then(datas => datas.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }))
       
   }
}

export class FavoritesDatas {
    constructor(bodyApp) {
        this.bodyApp = document.querySelector(bodyApp)
        
        this.load()
    }

    load() {
        this.ArrayOfTheUser = JSON.parse(localStorage.getItem('@github-users:')) || []
        
    }

    save() {
        localStorage.setItem('@github-users:', JSON.stringify(this.ArrayOfTheUser))
    }

    delete(userlogin) {
        const filterUserArray = this.ArrayOfTheUser.filter(OldArray => OldArray.login !== userlogin)

        this.ArrayOfTheUser = filterUserArray
        this.update()
        this.save()
    }

    async add(userlogin) {
        try {
            const userExist = this.ArrayOfTheUser.find(old => old.login === userlogin)

            if(userExist) {
                throw new Error('Usuário já cadastrado!')
            }
            
            const newUser = await githubUsers.search(userlogin)
            
            if(newUser.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }
    
            console.log(newUser)
            this.ArrayOfTheUser = [newUser, ...this.ArrayOfTheUser]
            this.update()
            this.save()
        } catch(error) {
            alert(error.message)
        } 
    }
}

export class FavoritesView extends FavoritesDatas{
    constructor(bodyApp) {
        super(bodyApp)

        this.tbody = this.bodyApp.querySelector('table tbody')
        
        this.update()
        this.clickAdd()
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

            row.querySelector('.remove').onclick = () => {
                this.delete(user.login)
            }

            this.tbody.append(row)
        })
    }

    clickAdd() {
        const addButton = this.bodyApp.querySelector('#add').onclick = () => {
            const { value } = this.bodyApp.querySelector('#idsearch')
            
            this.add(value)
       }
       
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