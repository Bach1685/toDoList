export class List {
  #html;
  get html() {
    return this.#html;
  }

  #elements;
  get elements() {
    return this.#elements;
  }

  constructor() {
    this.#html = document.createElement("ol");
    this.#html.start = "1";
    this.#html.classList.add("list");
    this.#html.id = "list";
    this.#elements = [];
  }

  add(elements) {
    if (Array.isArray(elements)) {
      elements.forEach((element) => {
        this.#html.append(element.html);
        this.#elements.push(element);
      });
      return;
    }
    this.#html.append(elements.html);
    this.#elements.push(elements);

    let elementHtmlFirstDone = Array.from(
      this.#html.querySelectorAll("li")
    ).find((_li) => _li.dataset.isDone === "true");
    this.#html.insertBefore(elements.html, elementHtmlFirstDone);
  }

  removeByIndex(index) {
    this.#elements[index].html.remove();
    this.#elements.splice(index, 1);
  }

  removeById(id) {
    let index = this.#elements.findIndex((element) => element.id == id);
    this.#elements[index].html.remove();
    this.#elements.splice(index, 1);
  }

  sendToEndById(id) {
    let elementHtml = Array.from(this.#html.querySelectorAll("li")).find(
      (_li) => _li.dataset.id == id
    );
    elementHtml.classList.add("element--done");
    elementHtml.dataset.isDone = true;

    // elementHtml.removeEventListener("click", () => {});

    this.#html.appendChild(elementHtml);

    //todo именить порядок в массиве элементов
  }
}
