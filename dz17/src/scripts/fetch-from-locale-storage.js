import removeRequest from './remove-request.js'
import checkboxIventRocket from './checkbox-ivent-rocket.js'
import createSVG from './create-svg.js'

export default function fetchFromLocaleStorage(event) {
  event.preventDefault()
  const keys = Object.keys(localStorage)
  keys.forEach((key) => {
    const li = document.createElement('li')
    const newLabel = document.createElement('label')
    const newRequest = document.createElement('input')
    const newRemoveRequest = document.createElement('input')
    newRemoveRequest.type = 'checkbox'
    newRemoveRequest.className = 'remove-request'
    newRemoveRequest.addEventListener('click', removeRequest)
    newLabel.className = 'label'
    newRequest.type = 'checkbox'
    newRequest.className = 'checkbox'
    li.appendChild(newLabel)
    li.appendChild(newRemoveRequest)
    document.querySelector('.requests').appendChild(li)
    if (window.localStorage.getItem(key) === 'false') {
      newRequest.addEventListener('click', checkboxIventRocket)
      newLabel.appendChild(newRequest)
      newLabel.appendChild(document.createTextNode(key))
    } else {
      newLabel.prepend(createSVG())
      newRequest.style.backgroundColor = '#19213f'
      newRequest.addEventListener('click', checkboxIventRocket)
      newLabel.appendChild(document.createTextNode(key))
      newLabel.appendChild(newRequest)
    }
  })
  const button = event.target
  button.remove()
}
