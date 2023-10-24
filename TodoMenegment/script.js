document.addEventListener('DOMContentLoaded', loadTodos);

document.getElementById('addButton').addEventListener('click', function() {
    const todoName = document.getElementById('todoName').value;
    const todoDesc = document.getElementById('todoDesc').value;

    if(todoName && todoDesc) {
        addTodo(todoName, todoDesc);
        saveTodos();
    } else {
        alert('Please fill in both the fields.');
    }
});

function addTodo(name, desc) {
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${name}</strong>
        <p>${desc}</p>
        <button onclick="markDone(this)">Done</button>
        <button onclick="updateTodo(this)">Update</button>
        <button onclick="deleteTodo(this)">Delete</button>
    `;
    todoList.appendChild(listItem);
}

function deleteTodo(btn) {
    btn.parentElement.remove();
    saveTodos();
}

function markDone(btn) {
    btn.parentElement.style.textDecoration = "line-through";
    saveTodos();
}

function updateTodo(btn) {
    const todoName = prompt("Update Todo Name", btn.parentElement.querySelector('strong').innerText);
    const todoDesc = prompt("Update Todo Description", btn.parentElement.querySelector('p').innerText);

    if (todoName && todoDesc) {
        btn.parentElement.querySelector('strong').innerText = todoName;
        btn.parentElement.querySelector('p').innerText = todoDesc;
        saveTodos();
    } else {
        alert("Both fields are required.");
    }
}

function saveTodos() {
    const todos = [];
    const todoItems = document.querySelectorAll('#todoList li');
    todoItems.forEach(item => {
        todos.push({
            name: item.querySelector('strong').innerText,
            desc: item.querySelector('p').innerText,
            done: item.style.textDecoration === "line-through"
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
        todos.forEach(todo => {
            addTodo(todo.name, todo.desc);
            if(todo.done) {
                document.querySelector('#todoList li:last-child').style.textDecoration = "line-through";
            }
        });
    }
}
