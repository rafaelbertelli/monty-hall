export default class Door {
  #number;
  #hasGift;
  #selected;
  #open;

  constructor(number, hasGift = false, selected = false, open = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  deselect() {
    const selected = false;
    return new Door(this.number, this.hasGift, selected, this.open);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new Door(this.number, this.hasGift, selected, this.open);
  }

  open() {
    const open = true;
    return new Door(this.number, this.hasGift, this.selected, open);
  }
}
