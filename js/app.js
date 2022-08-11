document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion__item')

  accordionItems.forEach((item, index) => {
    const colorBackground = item.dataset.colorBack
    const colorBorder = item.dataset.colorBorder
    
    if (colorBackground || colorBorder) {
      item.style.background = colorBackground
      item.style.borderColor = colorBorder
    }
    const header = item.querySelector('.accordion__header')

    header.addEventListener('click', () => {
      const content = item.querySelector('.accordion__content')
      const icon = item.querySelector('.accordion__icon')

      item.classList.toggle('open')
      if (item.classList.contains('open')) {
        content.style.height = `${content.scrollHeight}px`
        icon.classList.replace('hide', 'show')
      } else {
        content.style.height = 0
        icon.classList.replace('show', 'hide')
      }

      removeOpen(index)
    })
  })

  function removeOpen(i) {
    accordionItems.forEach((item, index) => {
      if (i != index) {
        const content = item.querySelector('.accordion__content')
        const icon = item.querySelector('.accordion__icon')

        item.classList.remove('open')
        content.style.height = 0
        icon.classList.replace('show', 'hide')
      }
    })
  }
})