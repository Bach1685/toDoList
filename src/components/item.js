import { Button } from "./button";
import { HtmlElement } from "./htmlElement";

export class Item extends HtmlElement {
  constructor(text = "*", callback = () => {}) {
    super("li");
    this.content.classList.add("item");
    this.content.append((document.createElement("p").innerHTML = text));
    this.content.append(
      new Button({
        text: "Сделано",
        color: "green",
        event: () => {
          this.isDone = true;
          callback();
        },
      }).getContent()
    );
    this.content.append(
      new Button({
        text: "Удалить",
        color: "red",
        event: () => {
          this.isDelete = true;
          callback();
        },
      }).getContent()
    );
    this.isDone = false;
    this.isDelete = false;
  }

  isDone() {
    return this.isDone;
  }
}
