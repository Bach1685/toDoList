import { Button } from "./components/button";



export class Form {
  #html;
  get html() {
    return this.#html;
  }

  constructor() {
    this.#html = document.createElement("div");
    this.#html.classList.add("form");

    let input = document.createElement("input");
    input.classList.add("input");
    this.#html.append(input);

    let button = document.createElement("button");
    button.classList.add("button", "adding-button");
    button.innerHTML = "Добавить";
    this.#html.append(button);
  }
}
