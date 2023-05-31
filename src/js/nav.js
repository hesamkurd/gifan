import { Settings } from './settings'

export function nav() {
  const settings = new Settings()
  const navCloseBtn = document.querySelector('#nav-close')
  const navOpenBtn = document.querySelector('#nav-open')
  const mainNav = document.querySelector('#main-nav')
  const navItems = document.querySelectorAll('.nav-item')

  if (settings.get('isNavbarClosed')) {
    closeSidebar()
  }
  function closeSidebar() {
    settings.set('isNavbarClosed', true)
    mainNav.classList.add('navbar-closed')
    navItems.forEach((navItem) => {
      navItem.setAttribute('data-tooltip', '')
    })
  }
  function openSidebar() {
    settings.remove('isNavbarClosed')
    mainNav.classList.remove('navbar-closed')
    navItems.forEach((navItem) => {
      navItem.removeAttribute('data-tooltip', '')
    })
  }

  navCloseBtn.addEventListener('click', closeSidebar)

  navOpenBtn.addEventListener('click', openSidebar)
}
