import buttonsCreat from "./buttons-creat.js";
import todoItemObject from "./todo-item-object.js";

export default function addNewTodo() {
    const input = document.querySelector('.new-task-input');
    const inputValue = input.value;
    if (inputValue !== '') {
        let newTodo = document.createElement('li');
        let newTodoText = document.createTextNode(inputValue);
        newTodo.appendChild(newTodoText);
        buttonsCreat(newTodo);
        newTodo.classList.add('todo-item', 'not-important');
        document.querySelector('.todo-list').appendChild(newTodo);
        input.value = '';
        let todoListStorage = JSON.parse(localStorage.getItem('todoList'));
        todoListStorage.push(new todoItemObject(newTodo));
        localStorage.setItem('todoList', JSON.stringify(todoListStorage));
        console.log(JSON.parse(localStorage.getItem('todoList')));
    } else {
        alert('Please WRITE SOMETHING you want to add to the list before click ADD!')
    }
}
