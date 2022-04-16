import { List } from "./list";
import { Form } from "./form.js";
import { HtmlElement } from "./htmlElement";

export class Section extends HtmlElement {
  #list;
  #form;

  constructor() {
    super("section");
    this.content.classList.add("section");

    this.#list = new List();
    this.#form = new Form((text) => {
      this.#list.add(text);
    });

    this.content.append(this.#list.getContent());
    this.content.append(this.#form.getContent());
  }
}
