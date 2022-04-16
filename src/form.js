import { Button } from "./components/button";

export class Form {
  #html;
  get html() {
    return this.#html;
  }

  constructor(callback) {
    this.#html = document.createElement("div");
    this.#html.classList.add("form");

    let input = document.createElement("input");
    input.classList.add("input");
    this.#html.append(input);

    let button = new Button({
      text: "Добавить",
      color: "grey",
      event: () => {
        callback(input.value);
      },
    });
    button.getContent().classList.add("button", "adding-button");
    button.getContent().innerHTML = "Добавить";
    this.#html.append(button.getContent());
  }
}
