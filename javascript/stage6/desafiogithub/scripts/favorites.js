const user = {
    "login": "RichardPinheiro",
    "name": "Richard Pinheiro",
    "public_repos": 76,
    "followers": 1555
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)
        
        this.update()
    }

    update(){
        const tbody = this.root.querySelector('table tbody')
        
        tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        })
    }
}