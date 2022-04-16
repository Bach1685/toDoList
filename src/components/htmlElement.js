export class HtmlElement {
  constructor(_content) {
    this.content = document.createElement(_content);
  }

  getContent() {
    return this.content;
  }
}
