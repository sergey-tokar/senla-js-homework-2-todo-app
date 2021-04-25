import {changeImportant} from "./change-todo-item.js";
import {changeDone} from "./change-todo-item.js";
import {deleteTodo} from "./change-todo-item.js";

export default function buttonsCreat(newTodoItem) {
    const buttonImportant = document.createElement('button');
    buttonImportant.classList.add('button', 'important-button', 'mark-important-button');
    buttonImportant.textContent = 'MARK IMPORTANT';

    const buttonNotImportant = document.createElement('button');
    buttonNotImportant.classList.add('button', 'important-button', 'not-important-button');
    buttonNotImportant.textContent = 'NOT IMPORTANT';

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('button', 'delete-button');

    const buttonDone = document.createElement('button');
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
