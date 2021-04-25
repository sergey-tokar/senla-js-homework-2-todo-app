import addNewTodo from "./add-new-todo.js";
import clickTodoItem from "./click-todo-item.js";

localStorage.setItem('todoList', JSON.stringify([]));

document.querySelector('.add-new-task-button').addEventListener('click', addNewTodo);
document.body.addEventListener('click', clickTodoItem, false);

