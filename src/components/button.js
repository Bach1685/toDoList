import { HtmlElement } from "./htmlElement";

export class Button extends HtmlElement {
  constructor({ text = "*", color = "white", event = () => {} }) {
    super("button");
    this.content.classList.add("button");
    this.content.innerHTML = text;
    this.content.style.background = color;
    this.content.addEventListener("click", () => {
      event();
    });
  }
}
