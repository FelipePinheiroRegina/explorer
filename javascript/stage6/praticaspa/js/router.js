import { removeAll } from './functionsassets.js'

export class Routes {
    routes = {}
    
    add(routeName, page){
        this.routes[routeName] = page
    }

    
    route(event){
        event = event || window.event
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href);
    
        this.handle()
    }

    handle(){
        const { pathname } = window.location
        
        if (pathname == '/universo' || pathname == '/exploracao') {
            document.documentElement.classList.add('sideBlock')
        }
        else {
            document.documentElement.classList.remove('sideBlock')
        }
    
        switch(pathname){
            case '/home':
                removeAll()
                break;
            
            case '/universo':
                removeAll()
                document.documentElement.classList.add('bg2')
                break;
            
            case '/exploracao':
                removeAll()
                document.documentElement.classList.add('bg3')
                break;
        }
        
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}