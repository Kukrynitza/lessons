import removeRequest from './remove-request.js'
import checkboxIventRocket from './checkbox-ivent-rocket.js'

export default function newRequests(event) {
  event.preventDefault()
  const form = event.currentTarget
  const text = form.querySelector('.text').value
  if (!text) {
    return
  }

  window.localStorage.setItem(text, JSON.stringify(false))
  const li = document.createElement('li')
  const newLabel = document.createElement('label')
  const newRequest = document.createElement('input')
  const newRemoveRequest = document.createElement('input')
  newRequest.type = 'checkbox'
  newRemoveRequest.type = 'checkbox'
  newRemoveRequest.className = 'remove-request'
  newRequest.className = 'checkbox'
  newLabel.className = 'label'
  newRequest.addEventListener('click', checkboxIventRocket)
  newRemoveRequest.addEventListener('click', removeRequest)
  newLabel.appendChild(newRequest)
  newLabel.appendChild(document.createTextNode(text))
  li.appendChild(newLabel)
  li.appendChild(newRemoveRequest)
  document.querySelector('.requests').appendChild(li)
}
