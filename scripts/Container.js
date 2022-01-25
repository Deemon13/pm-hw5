export class Container {
  constructor(item) {
    this.title = item.title;
  }

  renderWrapper() {
    return `<div class='wrapper'></div>`;
  }
  renderDeleteButton() {}
  renderSortButton() {}
  renderTitle(title) {
    return `<h2>${title}</h2>`;
  }
}
