export class DropDown {
  #dropdown = null
  constructor() {
    document.addEventListener('click', this.handle.bind(this))
  }

  handle(event) {
    const parent = event.target.closest('[data-dropdown]')

    if (!parent) {
      this.hide()
      return
    }
    this.show(parent)
  }

  show(parent) {
    const id = parent.dataset.dropdown
    this.#dropdown = document.querySelector(id)
    this.#dropdown.classList.toggle('hidden')
  }

  hide() {
    if (!this.#dropdown) {
      return
    }
    this.#dropdown.classList.add('hidden')
    this.#dropdown = null
  }
}
