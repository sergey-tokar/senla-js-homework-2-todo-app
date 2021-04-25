 export default function clickTodoItem(event) {

    if (event.target.classList.contains('todo-item')) {
        document.querySelectorAll('.todo-item').forEach(element => {
            if (element == event.target) {
                event.target.classList.toggle('clicked');
            } else {
                element.classList.remove('clicked');
            }
            ;
        });
    } else {
        document.querySelectorAll('li').forEach(elem => elem.classList.remove('clicked'));
    }
}
