import { Button } from "./button";

export { Button } from "./button";

export class Item {
  constructor(text = "*", callback = () => {}) {
    this.content = document.createElement("li");
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

  getContent() {
    return this.content;
  }

  isDone() {
    return this.isDone;
  }
}
