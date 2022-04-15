import { Button } from "./button.js";

export class Element {
  #html;
  get html() {
    return this.#html;
  }
  #value;
  get value() {
    return this.#value;
  }
  #isDone;

  #id = 0;
  get id() {
    return this.#id;
  }

  constructor(value) {
    this.#html = document.createElement("li");
    this.#html.classList.add("element");

    let content = document.createElement("p");
    content.classList.add("element__content");
    content.innerHTML = value;
    this.#html.append(content);

    let buttons = document.createElement("div");
    this.#html.append(buttons);

    this.#id = Math.random();
    this.#html.dataset.id = this.#id;
    this.#html.dataset.isDone = false;

    buttons.append(new Button(this.#id, "button--ok").html);
    buttons.append(new Button(this.#id, "button--delete").html);

    this.#value = value;
    this.#isDone = false;
  }
}
