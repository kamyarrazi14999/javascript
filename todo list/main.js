// Get required DOM elements
const addtodoButton = document.getElementById('add-todo-btn');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const editformWrapper = document.getElementById('edit-form-wrapper');
const editInput = document.getElementById('edit-input');
const editForme = document.getElementById('edit-form');
const aLerttext = document.querySelector('.alert-text');
let todos;

if(localStorage.getItem('todos')) {
    todos = localStorage.getItem('todos').split(','); // Load todos from local storage
} else {
    todos = [];
}
 // Array to store todo items
// save and load todos from local storage
const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos',todos);
};

// Function to display all todos in the list
const Displaytodos = () => {
    todoList.innerHTML = ''; // Clear the list before adding new items
    todos.forEach((todo, index) => { // Loop through todos array
        const todoItem = document.createElement('li');
        todoItem.classList = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${todo}</span>
            <button type='button' class='todo-btn' id='edit-btn' onclick="editTodo(this)" data-index="${index}">
                <i class="fa fa-edit"></i>
            </button>
            <button type='button' class='todo-btn' id='delete-btn' data-index="${index}" onclick="deleteTodo(this)">
                <i class='fa fa-trash'></i>
            </button>
        `;
        todoList.appendChild(todoItem); // Add item to the list
        
    });
    // Check if there are no todos and display an alert message
    if (todos.length === 0) {
        aLerttext.classList.add('show-alert-text');
        aLerttext.textContent = '😯 Empty list. Add a new todo to get started!';
    };
};
Displaytodos(); // Initial call to display todos

// Event listener for adding a new todo
addtodoButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check if input is not empty
    const value = addInput.value.trim();
    if (value !== '') {
        todos.push(value); // Add new todo to the array
        saveTodosToLocalStorage(); // Save updated todos to local storage
        Displaytodos(); // Update the displayed list
        addInput.value = ''; // Clear input after adding
        aLerttext.classList.remove('show-alert-text'); // Remove alert if present
    } else {
        // Show alert if input is empty
        aLerttext.classList.add('show-alert-text');
        aLerttext.textContent = '😯 Please enter a todo item';
        aLerttext.classList.add('alert-animation');
        aLerttext.addEventListener('animationend', () => {
        // if animation ends, remove alert classes  
            aLerttext.classList.remove('show-alert-text', 'alert-animation'); // Remove alert after animation
        });
     
    }   
    
});

// Function to delete a todo item
function deleteTodo(btn) {
    const index = btn.dataset.index; // Get the index of the item to delete
    todos.splice(index, 1);   // Remove item from array
    Displaytodos(); // Update the displayed list
}

// Function to edit a todo item
function editTodo(btn) {
    // Get the index of the item to edit
    const index = btn.dataset.index;

    // Show the edit form and set its value
    editformWrapper.classList.add('show-form');
    editInput.value = todos[index];
    editInput.dataset.index = index; // Store index in input dataset
    editInput.focus(); 

    // Add event listener for submitting the edit form
    editForme.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        // Check if input is not empty
        if (editInput.value === '') {
            aLerttext.classList.add('show-alert-text');
            aLerttext.textContent = '😯 Please enter a todo item';
            return;
        }
        editformWrapper.classList.remove('show-form'); // Hide edit form
        const editingIndex = editInput.dataset.index; // Get index of item being edited
        todos[editingIndex] = editInput.value; // Update item in array
        Displaytodos(); // Update the displayed list
    });

    // Close edit form when clicking outside of it
    editformWrapper.addEventListener('click', (e) => {
        if (e.target.getAttribute('id') === 'edit-form-wrapper') {
            editformWrapper.classList.remove('show-form');
            editInput.value = ''; // Clear input after closing form
        }
    });
}