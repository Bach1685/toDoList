import { Item } from "./item";
import { HtmlElement } from "./htmlElement";

export class List extends HtmlElement {
  constructor() {
    super("ol");
    this.list = [
      new Item("Пункт 1", () => {
        this.render();
      }),
      new Item("Пункт 2", () => {
        this.render();
      }),
      new Item("Пункт 3", () => {
        this.render();
      }),
      new Item("Пункт 4", () => {
        this.render();
      }),
      new Item("Пункт 5", () => {
        this.render();
      }),
    ];
    this.render();
  }

  getContent() {
    return this.content;
  }

  render() {
    this.remove();
    this.list
      .filter((elem) => {
        return !elem.isDelete;
      })
      .sort((a, b) => {
        return a.isDone - b.isDone;
      })
      .forEach((elem) => {
        if (elem.isDone) {
          elem.getContent().classList.add("item--done");
        }

        this.content.append(elem.getContent());
      });
  }

  remove() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.firstChild);
    }
  }

  add(text) {
    this.list.push(
      new Item(text, () => {
        this.render();
      })
    );
    this.render();
  }
}
