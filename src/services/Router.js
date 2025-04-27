const Router = {
    handle() {
        const path = window.location.pathname || '/Tasks';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === path);
        });
        const appEl = document.querySelector('.task-app');
        appEl.style.display = path === '/Tasks' ? 'flex' : 'none';
    },
    init: () => {
        Router.handle();
        window.addEventListener('popstate', () => this.handle());
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const path = event.target.getAttribute("href");
                history.pushState({}, '', path);
                Router.handle();
            });
        });
    }
}

export default Router;