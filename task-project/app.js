const listTasks = document.getElementById("list-tasks");
const form = document.getElementById('submit-task');
const input = document.getElementById('input-task');
const clear = document.getElementById('clear-tasks');

//Get tasks from Local Storage
loadTasksIntoList();

//Store Tasks to Local Storage
function storeTaskLocalStorage(task) {

    let tasks = [];
    if(localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Remove task from Local Storage
function removeFromLocalStorage(task) {
    let tasks = [];
    if(localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));

        tasks.forEach(function(item, index) {
            if(item === task) {
                tasks.splice(index, 1);
            }
        });
        
        //Store the new array
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
}

function loadTasksIntoList() {
    let tasks = [];
    if(localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));

        tasks.forEach(task => {
            appendToList(task);
        });
    }
}

//Create dom task elemend and apend to the list
function appendToList(task) {
    let elem = document.createElement('div');
    elem.className = "todo notification is-info";
    let delElem = document.createElement('button');
    delElem.className = "delete";

    //Append Delete Button and Text
    elem.appendChild(document.createTextNode(task));
    elem.appendChild(delElem);

    //Append into list Task
    listTasks.appendChild(elem);
}

//Create and store new task
function createNewTask(task) {
    storeTaskLocalStorage(task);
    appendToList(task);
}

//Submit form event listener
form.addEventListener('submit', e => {
    e.preventDefault();
    
    let task = input.value;
    createNewTask(task);
    input.value = "";
});

//Click remove all tasks
clear.addEventListener('click', e => {
    e.preventDefault();

    let tasks = document.querySelectorAll('.todo');
    tasks.forEach(function(task) {
        task.remove();   
    });

    localStorage.clear();
});

//Click to remove task
listTasks.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.textContent);
    }
});