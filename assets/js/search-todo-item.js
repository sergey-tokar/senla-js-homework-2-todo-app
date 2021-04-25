export default function searchTodoItem(event) {
    const textForSearch = event.target.value;
    const todoList = document.querySelectorAll('.todo-item');
    todoList.forEach(todoItem => {
        if (!todoItem.textContent.includes(textForSearch)) {
            todoItem.classList.add('hide');
        } else {
            todoItem.classList.remove('hide');
        }
    });
}
