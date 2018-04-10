class UI {

    constructor(table, app) {
        this.table = table;
        this.app = app;
    }

    addTask(task) {
        let elem = document.createElement('tr');
        elem.innerHTML = `
            <td>${task.title}</td>
            <td>${task.time}</td>
            <td>${task.priority}</td>
            <td><a class="btn btn-danger remove-task">Remove</a></td>
        `;

        this.table.appendChild(elem);
        this.showMessage("Task has been added", "alert-success");
    }

    showMessage(body, type) {
        
        let message = document.createElement('div');
        message.className = "message-alert";
        message.innerHTML = `
            <p class="alert ${type}">${body}</p>
        `;

        this.app.appendChild(message);

        setTimeout(function() {
            message.remove();
        }, 3000);
    }

}