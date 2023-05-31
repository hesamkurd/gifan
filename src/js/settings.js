export class Settings {
  #settings = null
  constructor() {
    this.#settings = JSON.parse(localStorage.getItem('settings')) ?? {}
  }

  get(key) {
    return this.#settings[key]
  }

  set(key, value) {
    this.#settings[key] = value

    this.updateLocalStorage()
  }

  remove(key) {
    if (!this.has(key)) {
      throw new Error(`Key ${key} does not exist in settings`)
    }
    delete this.#settings[key]
    this.updateLocalStorage()
  }

  has(key) {
    return key in this.#settings
  }

  updateLocalStorage() {
    localStorage.setItem('settings', JSON.stringify(this.#settings))
  }
}
