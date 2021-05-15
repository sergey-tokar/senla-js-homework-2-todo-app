import todoItemObject from './todo-item-object.js';

export default function refreshTodoListState() {
    const currentTodoList = document.querySelectorAll('.todo-item');

    const newTodoListState = [];
    currentTodoList.forEach(todoItem => {
        let newTodoItemObject = new todoItemObject(todoItem);
        newTodoItemObject.classList.forEach((itemClassName, i) => {
            if (itemClassName === 'clicked' || itemClassName === 'hide') {
                newTodoItemObject.classList.splice(i, 1);
            }
        })
        newTodoListState.push(newTodoItemObject);
        console.log(newTodoListState);
        console.log(JSON.parse(localStorage.getItem('todoListState')));
    });
    localStorage.setItem('todoListState', JSON.stringify(newTodoListState));


}
