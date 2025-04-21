window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const app = document.getElementById('app');

    const helloWorld = document.createElement('h1');
    helloWorld.textContent = 'Hello, World!';

    app.appendChild(helloWorld);
});