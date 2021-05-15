import refreshTodoListState from "./refresh-todo-list-state.js";
import {refreshFilter} from "./filter-todo-list.js";

export function changeImportant(event) {
    event.target.parentElement.classList.toggle('important');
    refreshFilter();
    refreshTodoListState();
}

export function changeDone(event) {
    event.target.parentElement.classList.toggle('done');
    refreshFilter();
    refreshTodoListState();
}

export function deleteTodo(event) {
    event.target.parentElement.remove();
    refreshFilter();
    refreshTodoListState();
}
