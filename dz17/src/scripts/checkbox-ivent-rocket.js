import createSVG from './create-svg.js'

export default function checkboxIventRocket(event) {
  event.preventDefault()
  const checkbox = event.target
  const label = checkbox.parentNode
  const completed = window.localStorage.getItem(label.innerText)
  if (completed === 'false') {
    setTimeout(() => {
      checkbox.style.backgroundColor = '#D35B24'
    }, 500)
    setTimeout(() => {
      label.prepend(createSVG()); checkbox.style.backgroundColor = '#19213f'; label.appendChild(checkbox)
    }, 1000)
    window.localStorage.setItem(label.innerText, JSON.stringify(true))
    label.style.textDecoration = 'line-through'
  } else {
    const svg = label.querySelector('svg')
    const checkboxes = label.querySelector('.checkbox')
    checkboxes.remove()
    setTimeout(() => {
      svg.style.backgroundColor = '#D35B24'
    }, 400)
    const newRequest = document.createElement('input')
    newRequest.type = 'checkbox'
    newRequest.className = 'checkbox'
    newRequest.style.backgroundColor = '#D35B24'
    newRequest.addEventListener('click', checkboxIventRocket)
    setTimeout(() => {
      label.prepend(newRequest); svg.remove()
    }, 800)
    setTimeout(() => {
      newRequest.style.backgroundColor = '#dce4fb'
    }, 1100)
    window.localStorage.setItem(label.innerText, JSON.stringify(false))
    label.style.textDecoration = 'none'
  }
}
