export default class todoItemObject {
    constructor(element) {
        this.text = element.firstChild.textContent;
        this.classList = Array.from(element.classList);
    }
}
