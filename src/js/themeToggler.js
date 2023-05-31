import { Settings } from './Settings'

export function themeToggler() {
  const settings = new Settings()

  const parent = document.querySelector('#theme-toggler')

  if (settings.get('theme') === 'dark') {
    document.documentElement.classList.add('dark')
  }

  parent.addEventListener('click', togglerTheme)

  function togglerTheme(event) {
    const btn = event.target.closest('button')
    if (!btn) return

    if (btn.dataset.theme === 'dark') {
      settings.set('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      settings.remove('theme')
      document.documentElement.classList.remove('dark')
    }
  }
}
