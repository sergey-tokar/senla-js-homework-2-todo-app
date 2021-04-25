import buttonsCreat from "./buttons-creat.js";

export default function init() {
    const todoListState = JSON.parse(localStorage.getItem('todoListState'));
    if (todoListState.length) {
        todoListState.forEach(todoItemObject => {
            const todoItem = document.createElement('li');
            const todoItemText = document.createTextNode(todoItemObject.text);
            todoItem.appendChild(todoItemText);
            buttonsCreat(todoItem);
            todoItem.classList.add(...todoItemObject.classList);
            document.querySelector('.todo-list').appendChild(todoItem);
        })
    }
}
