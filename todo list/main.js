const addtodoButton = document.getElementById('add-todo-btn'); // بدون نقطه
const addInput = document.getElementById('add-input'); // بدون نقطه و اصلاح نام
const todoList = document.getElementById('todo-list'); // بدون نقطه
// Initialize an empty array to hold todo items
const todos = [];

addtodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Get the value from the input field and trim whitespace
    const value = addInput.value.trim();
    // Check if the input is not empty
    if (value !== '') {
        // Create a new todo object
        const todoItem = document.createElement('li');
        todoItem.classList = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${value}</span>
            <button type='button' class='todo-btn' id='edit-btn'>
                <i class="fa fa-edit"></i>
            </button>
            <button type='button' class='todo-btn' id='delete-btn'>
                <i class='fa fa-trash'></i>
            </button>
        `;
        // Append the new todo item to the todo list
        todoList.appendChild(todoItem);
        
    }
});
