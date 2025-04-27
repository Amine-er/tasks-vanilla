import store from './store.js';

// Render tasks into the DOM
export const renderTasks = () => {
    const listEl = document.querySelector('#task-list');
    listEl.innerHTML = '';
    store.tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
      <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''} />
      <label>${task.title}</label>
      <button class="delete-btn" data-id="${task.id}">×</button>
    `;
        listEl.append(li);
    });
};

// Load tasks from API
export const loadTasks = async () => {
    const tasks = await app.API.getAllTasks();
    store.tasks = tasks;
    renderTasks();
}

// Add a new task
export const addTask = title => {
    const newTask = { id: Date.now(), title, completed: false };
    store.tasks.push(newTask);
    renderTasks();
};

// Toggle task completion state
export const toggleTask = id => {
    const task = store.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
};

// Delete a task
export const deleteTask = id => {
    store.tasks = store.tasks.filter(t => t.id !== id);
    renderTasks();
};