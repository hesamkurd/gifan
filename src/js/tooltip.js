export function tooltip(config = {}) {
  document.body.addEventListener('mouseover', (event) => {
    if (!event.target.closest('[data-tooltip]')) return

    const parent = event.target.closest('[data-tooltip]')
    const title = parent.dataset.title

    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')

    if (config.theme && config.theme === 'dark') {
      tooltip.classList.add('dark')
    } else {
      tooltip.classList.add('light')
    }

    tooltip.innerHTML = title
    document.body.appendChild(tooltip)

    setPosition(parent, tooltip)
  })

  document.body.addEventListener('mouseout', (event) => {
    if (!event.target.closest('[data-tooltip]')) return
    const tooltip = document.querySelector('.tooltip')

    setTimeout(() => {
      document.body.removeChild(tooltip)
    }, 0)
  })

  function setPosition(parent, tooltip) {
    const parentCoords = parent.getBoundingClientRect()
    const position = parent.dataset.position ? parent.dataset.position : 'top'

    switch (position) {
      case 'top':
        tooltip.classList.add('t-top')
        tooltip.style.top = parentCoords.top - tooltip.offsetHeight - 8 + 'px'
        tooltip.style.left =
          parentCoords.left +
          (parentCoords.width - tooltip.offsetWidth) / 2 +
          'px'
        break
      case 'right':
        tooltip.classList.add('t-right')
        tooltip.style.top =
          parentCoords.top +
          (parentCoords.height - tooltip.offsetHeight) / 2 +
          'px'
        tooltip.style.left = parentCoords.right + 8 + 'px'
        break
      case 'bottom':
        tooltip.classList.add('t-bottom')
        tooltip.style.top = parentCoords.bottom + 8 + 'px'
        tooltip.style.left =
          parentCoords.left +
          (parentCoords.width - tooltip.offsetWidth) / 2 +
          'px'
        break
      case 'left':
        tooltip.classList.add('t-left')
        tooltip.style.top =
          parentCoords.top +
          (parentCoords.height - tooltip.offsetHeight) / 2 +
          'px'
        tooltip.style.left = parentCoords.left - tooltip.offsetWidth - 8 + 'px'
        break
      default:
        tooltip.classList.add('t-top')
        tooltip.style.top = parentCoords.top - tooltip.offsetHeight - 8 + 'px'
        tooltip.style.left =
          parentCoords.left +
          (parentCoords.width - tooltip.offsetWidth) / 2 +
          'px'
    }

    // tooltip.style.left = parentCoords.left + parentCoords.width + 16 + "px"
    // tooltip.style.top = parentCoords.top + "px"
  }
}
