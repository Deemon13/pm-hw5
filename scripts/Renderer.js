import { Component } from "./Component";

class Renderer {
  constructor(items) {
    this.items = items;
  }

  render() {
    const elements = document.querySelector("#root");
    const title = this.items
      .map((el) => {
        const component = new Component(el);
        return component.render();
      })
      .join("");

    elements.innerHTML = title;

    console.log(title);
    // TODO this is the entry point of your implementation
    console.log("this.items: ", this.items);
  }
}

export default Renderer;
