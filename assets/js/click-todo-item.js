export default function clickTodoItem(event) {

    if (event.target.classList.contains('todo-item')) {
        const todoList = document.querySelectorAll('.todo-item')
        todoList.forEach(element => {
            if (element === event.target) {
                event.target.classList.toggle('clicked');
            } else {
                element.classList.remove('clicked');
            }
        });
    } else {
        document.querySelectorAll('li').forEach(elem => elem.classList.remove('clicked'));
    }
}
