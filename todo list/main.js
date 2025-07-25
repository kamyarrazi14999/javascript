const addtodoButton = document.getElementById('add-todo-btn');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todos = [];

addtodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const value = addInput.value.trim();
    // IF VALUE IS NOT EMPTY, ADD TO TODOS
    // AND UPDATE THE LIST
    if (value !== '') {
        todos.push(value); // افزودن ورودی جدید به آرایه todos
        addInput.value = ''; // پاک کردن ورودی بعد از افزودن
        todoList.innerHTML = ''; // پاک کردن لیست قبل از افزودن آیتم‌ها
        todos.forEach((todo) => {
            const todoItem = document.createElement('li');
            todoItem.classList = 'todo-item';
            todoItem.innerHTML = `
                <span class="todo-text">${todo}</span>
                <button type='button' class='todo-btn' id='edit-btn'>
                    <i class="fa fa-edit"></i>
                </button>
                <button type='button' class='todo-btn' id='delete-btn' data-index=${index} onclick="deleteTodo(this)">
                    <i class='fa fa-trash'></i>
                </button>
            `;
            todoList.appendChild(todoItem);
        });
    } else {
        alert('Please enter a todo item');
    }
});

const deleteTodo = (btn) => { 
    const index = btn.dataset.index;
    
} 