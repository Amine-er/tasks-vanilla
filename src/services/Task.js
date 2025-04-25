import store from './store.js';

export const loadTasks = async () => {
    const tasks = await app.API.getAllTasks();
    store.tasks = tasks;
    console.log(JSON.stringify(store.tasks));
}