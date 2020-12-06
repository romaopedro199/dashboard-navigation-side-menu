const mainButtons = document.querySelectorAll('.main-menu .item')
const secondaryButtons = document.querySelectorAll('.secondary-menu .item')

const handleMainButtonClick = (event) => {
  const button = event.target
  if (!isActive(button)) {
    removeMainActive()
    addActive(button)
  }
}

const handleSecondaryButtonClick = (event) => {
  const button = event.target
  if (!isActive(button)) {
    removeSecondaryActive()
    addActive(button)
  }
}

mainButtons.forEach(button => {
  button.addEventListener('click', handleMainButtonClick)
})

secondaryButtons.forEach(button => {
  button.addEventListener('click', handleSecondaryButtonClick)
})

function isActive (button) {
  return button.hasAttribute('active')
}

function removeMainActive () {
  document.querySelectorAll('.main-menu .item[active]').forEach(item => {
    item.removeAttribute('active')
  })
}

function removeSecondaryActive () {
  document.querySelectorAll('.secondary-menu .item[active]').forEach(item => {
    item.removeAttribute('active')
  })
}

function addActive (button) {
  button.setAttribute('active', '')
}
