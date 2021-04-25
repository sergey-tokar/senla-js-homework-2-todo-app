import buttonsCreat from "./buttons-creat.js";
import refreshTodoListState from "./refresh-todo-list-state.js";
import {refreshFilter} from "./filter-todo-list.js";

export default function addNewTodo() {
    const input = document.querySelector('.new-task-input');
    const inputValue = input.value;
    if (inputValue !== '') {
        const newTodo = document.createElement('li');
        const newTodoText = document.createTextNode(inputValue);
        newTodo.appendChild(newTodoText);
        buttonsCreat(newTodo);
        newTodo.classList.add('todo-item');
        document.querySelector('.todo-list').appendChild(newTodo);
        input.value = '';
        console.log(JSON.parse(localStorage.getItem('todoListState')));
        refreshFilter();
        refreshTodoListState();
    } else {
        alert('Please WRITE SOMETHING you want to add to the list before click ADD!')
    }

}
