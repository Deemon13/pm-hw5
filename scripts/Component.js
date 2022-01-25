import { Container } from "./Container";

export class Component extends Container {
  constructor(item) {
    super(item);
    // this.title = item;
  }

  render() {
    return `<div>${this.title}</div>`;
  }
}
