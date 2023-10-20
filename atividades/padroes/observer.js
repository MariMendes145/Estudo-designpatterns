class Editor {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber - 1, 0, text);
    this.notify();
  }

  removeLine(lineNumber) {
    if (lineNumber >= 1 && lineNumber <= this.lines.length) {
      this.lines.splice(lineNumber - 1, 1);
      this.notify();
    }
  }

  getLines() {
    return this.lines.slice();
  }

  open() {
    console.log("Editor aberto.");
  }

  save() {
    console.log("Editor salvo.");
  }
}
