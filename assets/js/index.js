import addNewTodo from "./add-new-todo.js";
import clickTodoItem from "./click-todo-item.js";
import {showAllTodo} from "./filter-todo-list.js";
import {showActiveTodo} from "./filter-todo-list.js";
import {showDoneTodo} from "./filter-todo-list.js";
import init from "./init.js";
import searchTodoItem from "./search-todo-item.js";

document.querySelector('.add-new-task-button').addEventListener('click', addNewTodo);
document.body.addEventListener('click', clickTodoItem);
document.querySelector('.tab-selector-all').addEventListener('click', showAllTodo);
document.querySelector('.tab-selector-active').addEventListener('click', showActiveTodo);
document.querySelector('.tab-selector-done').addEventListener('click', showDoneTodo);
document.querySelector('.search').addEventListener('input', searchTodoItem);
init();
