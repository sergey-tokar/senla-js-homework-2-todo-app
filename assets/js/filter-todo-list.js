import searchTodoItem from "./search-todo-item.js";

function clearTodoItemsFilter() {
    const todoList = document.querySelectorAll('.todo-item');
    todoList.forEach(todoItem => todoItem.classList.remove('hide'));
}

function clearTabSelectorsActive() {
    const tabSelectors = document.querySelectorAll('.tab-selector');
    tabSelectors.forEach(tabSelector => tabSelector.classList.remove('active-tab'));
}

export function showAllTodo(event) {
    clearTabSelectorsActive();
    clearTodoItemsFilter();
    event.target.classList.add('active-tab');
}

export function showActiveTodo(event) {
    clearTabSelectorsActive();
    clearTodoItemsFilter();
    event.target.classList.add('active-tab');
    const todoList = document.querySelectorAll('.todo-item');
    todoList.forEach(todoItem => {
        if (todoItem.classList.contains('done')) {
            todoItem.classList.add('hide');
        }
    });
}

export function showDoneTodo(event) {
    clearTabSelectorsActive();
    clearTodoItemsFilter();
    event.target.classList.add('active-tab');
    const todoList = document.querySelectorAll('.todo-item');
    todoList.forEach(todoItem => {
        if (!todoItem.classList.contains('done')) {
            todoItem.classList.add('hide');
        }
    })
}

export function refreshFilter() {
    const activeTab = document.querySelector('.active-tab');
    activeTab.click();
}
