export class Button {
  #html;
  get html() {
    return this.#html;
  }

  constructor(id, className) {
    this.#html = document.createElement("button");
    this.#html.classList.add("button", className);
    this.#html.dataset.id = id;
  }
}
