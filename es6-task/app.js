const table = cs('task-table');
const app = cs('app');
const formUI = cs('task-form');
const ui = new UI(table, app);

table.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.classList.contains('remove-task')) {
        LStorage.removeRecord('tasks', e.target.parentElement.parentElement.firstElementChild.textContent);
        e.target.parentElement.parentElement.remove();
    }
    
});

formUI.addEventListener('submit', e => {
    e.preventDefault();

    let title = cs('title');
    let time = cs('time');
    let priority = cs('priority');

    if (title.value == "" || time.value == "" || priority.value == "") {
        ui.showMessage("Please fill all form", "alert-danger");
    } else {
        const task = new Task(title.value, time.value, priority.value);
        ui.addTask(task);
        LStorage.addRecord('tasks', task);
    }

});

//Helper for select by ID
function cs(select) {
    return document.getElementById(`${select}`);
}

//Load Tasks
function loadTasks() {
    let tasks = LStorage.getAll('tasks');
    tasks.forEach(element => {
        ui.addTask(element);
    });
}
loadTasks();