import Store from './services/Store.js';
import API from './services/API.js';
import { loadTasks } from "./services/Task.js";

window.app = {}
app.store = Store;
app.API = API

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM fully loaded and parsed');
    await loadTasks();
});
