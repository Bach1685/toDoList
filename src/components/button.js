export class Button {
  constructor({ text = "*", color = "white", event = () => {} }) {
    this.content = document.createElement("button");
    this.content.classList.add('button');
    this.content.innerHTML = text;
    this.content.style.background = color;
    this.content.addEventListener("click", () => { event() });
  }

  getContent() {
    return this.content;
  }
}
