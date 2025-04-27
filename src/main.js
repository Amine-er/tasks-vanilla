import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadTasks, addTask, toggleTask, deleteTask } from "./services/Task.js";

window.app = {}
app.store = Store;
app.API = API
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM fully loaded and parsed');
    app.router.init();
    await loadTasks();

    const form = document.querySelector('#add-task-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const input = document.querySelector('#new-task-input');
        if (input.value.trim()) {
            addTask(input.value.trim());
            input.value = '';
        }
    });

    const list = document.querySelector('#task-list');
    list.addEventListener('click', e => {
        const id = Number(e.target.dataset.id);
        if (e.target.matches('input[type="checkbox"]')) {
            toggleTask(id);
        }
        if (e.target.matches('.delete-btn')) {
            deleteTask(id);
        }
    });
});
