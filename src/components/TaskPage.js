export class TaskPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const styles = document.createElement("style");
        styles.textContent = `@import "/src/components/TaskPage.css";`;
        this.root.appendChild(styles);
        const template = document.getElementById("task-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}
customElements.define("task-page", TaskPage);
