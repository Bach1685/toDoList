import { List } from "./list.js";
import { Element } from "./element.js";
import { Form } from "./form.js";

export class Section {
  #list;
  #form;
  #html;
  get html() {
    return this.#html;
  }

  constructor() {
    this.#html = document.createElement("section");
    this.#html.classList.add("section");

    this.#list = new List();
    this.#form = new Form();
    
    this.#html.append(this.#list.html);
    this.#html.append(this.#form.html);
  }

  activateListeners() {
    Array.from(this.#html.getElementsByClassName("adding-button")).forEach(
      (button) => {
        button.addEventListener("click", () => this.#functionHandler());
      }
    );
  }

  #functionHandler() {
    let element = new Element(
      Array.from(this.#form.html.querySelectorAll("input"))[0].value
    );
    this.#list.add(element);

    Array.from(element.html.getElementsByClassName("button--delete")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          this.#list.removeById(e.target.dataset.id);
        });
      }
    );

    Array.from(element.html.getElementsByClassName("button--ok")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          this.#list.sendToEndById(e.target.dataset.id);
        });
      }
    );
  }
}
