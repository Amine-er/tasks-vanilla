const Router = {
    init: () => {
        // Bind nav links
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const href = event.target.getAttribute("href");
                Router.go(href);
            });
        });
        // Process initial URL
        Router.go(location.pathname);

        window.addEventListener('popstate',  event => {
            Router.go(event.state.route, false);
        });
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case '/Home':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Welcome Home';
                break;
            case '/Tasks':
                pageElement = document.createElement('task-page');
                break;
            case '/Login':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Login Page';
                break;
            default:
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Page Not Found';
                break;
        }
        if (pageElement) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
        }

        window.scrollX = 0;
    }
}

export default Router;