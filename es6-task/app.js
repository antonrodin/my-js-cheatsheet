const table = cs('task-table');
const app = cs('app');
const formUI = cs('task-form');
const ui = new UI(table, app);

formUI.addEventListener('submit', e => {
    e.preventDefault();

    let title = cs('title');
    let time = cs('time');
    let priority = cs('priority');

    if (title.value == "" || time.value == "" || priority.value == "") {
        console.log(title.value, time.value, priority.value);
        ui.showMessage("Please fill all form", "alert-danger");
    } else {
        const task = new Task(title.value, time.value, priority.value);
        ui.addTask(task);
    }

});

//Helper for select by ID
function cs(select) {
    return document.getElementById(`${select}`);
}