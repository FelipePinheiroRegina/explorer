const routes = {
    "/home": "pages/home.html",
    "/universo": "pages/universo.html",
    "/exploracao": "pages/exploracao.html",
    404: "pages/404.html",
}

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('#menu a');
    links.forEach(function(link) {
        link.addEventListener("click", route);
    });
});

function route(event){
    event = event || window.event
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    handle()
}

function handle(){
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
    
    const route = routes[pathname] || routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
}

function removeAll(){
    document.documentElement.classList.remove('bg2')
    document.documentElement.classList.remove('bg3')
}