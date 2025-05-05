import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadTasks, addTask, toggleTask, deleteTask } from "./services/Task.js";
import {TaskPage} from './components/TaskPage.js';

window.app = {}
app.store = Store;
app.API = API
app.router = Router;

window.addEventListener('DOMContentLoaded',() => {
    console.log('DOM fully loaded and parsed');
    loadTasks();
    app.router.init();
});
