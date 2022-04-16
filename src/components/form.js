import { Button } from "./button";
import { HtmlElement } from "./htmlElement";

export class Form extends HtmlElement {

  constructor(callback) {
    super('div');
    this.content.classList.add("form");

    let input = document.createElement("input");
    input.classList.add("input");
    this.content.append(input);

    let button = new Button({
      text: "Добавить",
      color: "grey",
      event: () => {
        callback(input.value);
      },
    });
    button.getContent().classList.add("button", "adding-button");
    button.getContent().innerHTML = "Добавить";
    this.content.append(button.getContent());
  }
}
