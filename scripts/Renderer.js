class Renderer {
  constructor(items) {
    this.items = items;
  }

  render() {
    // const markup = this.items
    //   .map((el) => {
    //     return `<div>${el.type}</div>`;
    //   })
    //   .join("");
    // TODO this is the entry point of your implementation
    // console.log("this: ", this);
    console.log("this.items: ", this.items);
    // console.log("markup: ", markup);
  }
}

export default Renderer;
