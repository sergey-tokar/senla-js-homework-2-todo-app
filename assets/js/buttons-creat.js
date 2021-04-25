import changeImportant from "./change-important.js";
import changeDone from "./change-done.js";
import deleteTodo from "./delete-todo.js";

export default function buttonsCreat(newTodoItem) {
    let buttonImportant = document.createElement('button');
    buttonImportant.classList.add('button', 'important-button', 'mark-important-button');
    buttonImportant.textContent = 'MARK IMPORTANT';

    let buttonNotImportant = document.createElement('button');
    buttonNotImportant.classList.add('button', 'important-button', 'not-important-button');
    buttonNotImportant.textContent = 'NOT IMPORTANT';

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('button', 'delete-button');

    let buttonDone = document.createElement('button');
    buttonDone.textContent = '\u2714';
    buttonDone.classList.add('button', 'done-button');

    newTodoItem.appendChild(buttonImportant);
    newTodoItem.appendChild(buttonNotImportant);
    newTodoItem.appendChild(buttonDelete);
    newTodoItem.appendChild(buttonDone);

    buttonImportant.addEventListener('click', changeImportant);
    buttonNotImportant.addEventListener('click', changeImportant);
    buttonDelete.addEventListener('click', deleteTodo);
    buttonDone.addEventListener('click', changeDone);

}
