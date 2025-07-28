const addtodoButton = document.getElementById('add-todo-btn');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todos = [];

const Displaytodos = () => {
    todoList.innerHTML = ''; // پاک کردن لیست قبل از افزودن آیتم‌ها
    todos.forEach((todo, index) => { // اضافه کردن index
        const todoItem = document.createElement('li');
        todoItem.classList = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${todo}</span>
            <button type='button' class='todo-btn' id='edit-btn'>
                <i class="fa fa-edit"></i>
            </button>
            <button type='button' class='todo-btn' id='delete-btn' data-index="${index}" onclick="deleteTodo(this)">
                <i class='fa fa-trash'></i>
            </button>
        `;
        todoList.appendChild(todoItem);
    });
};

addtodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const value = addInput.value.trim();
    if (value !== '') {
        todos.push(value); // افزودن ورودی جدید به آرایه todos
        addInput.value = ''; // پاک کردن ورودی بعد از افزودن
        Displaytodos(); // به‌روزرسانی نمایش لیست TODOs
    } else {
        alert('Please enter a todo item');
    }
});

function deleteTodo(btn) {
    const index = btn.dataset.index;
    todos.splice(index, 1);   
    Displaytodos(); // به‌روزرسانی نمایش لیست TODOs
}