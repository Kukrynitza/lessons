import createSVG from './create-svg.js'

function removeRequest(event) {
  event.preventDefault()
  const checkbox = event.target
  const li = checkbox.parentNode
  const text = li.querySelector('label').outerText
  li.remove()
  window.localStorage.removeItem(text)
}

function checkboxIventRocket(event) {
  event.preventDefault()
  const checkbox = event.target
  const label = checkbox.parentNode
  const completed = window.localStorage.getItem(label.innerText)
  if (completed === 'false') {
    setTimeout(() => {
      checkbox.style.backgroundColor = '#D35B24'
    }, 500)
    setTimeout(() => {
      label.prepend(createSVG); checkbox.style.backgroundColor = '#19213f'; label.appendChild(checkbox)
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

function newRequests(event) {
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
function clearLocalStorage() {
  window.localStorage.clear()
  const form = document.querySelector('.requests')
  form.innerHTML = '<form action="get" class="requests"></form>'
}
async function fetchTodos() {
  const requests = await fetch('https://dummyjson.com/todos?limit=3')
  const { todos } = await requests.json()
  todos.forEach((element) => {
    if (!window.localStorage.getItem(element.todo)) {
      window.localStorage.setItem(element.todo, JSON.stringify(element.completed))
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
      if (window.localStorage.getItem(element.todo) === 'false') {
        newRequest.addEventListener('click', checkboxIventRocket)
        newLabel.appendChild(newRequest)
        newLabel.appendChild(document.createTextNode(element.todo))
      } else {
        newLabel.prepend(createSVG)
        newRequest.style.backgroundColor = '#19213f'
        newRequest.addEventListener('click', checkboxIventRocket)
        newLabel.appendChild(document.createTextNode(element.todo))
        newLabel.appendChild(newRequest)
      }
    }
  })
}
function fetchFromLocaleStorage(event) {
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
      newLabel.prepend(createSVG)
      newRequest.style.backgroundColor = '#19213f'
      newRequest.addEventListener('click', checkboxIventRocket)
      newLabel.appendChild(document.createTextNode(key))
      newLabel.appendChild(newRequest)
    }
  })
  const button = event.target
  button.remove()
}
const addNewTodos = document.querySelector('.add-new-todos')
addNewTodos.addEventListener('submit', newRequests)
const buttonClear = document.querySelector('.clear')
buttonClear.addEventListener('click', clearLocalStorage)
const buttonFetchFromLocaleStorage = document.querySelector('.fetch-from-locale-storage')
buttonFetchFromLocaleStorage.addEventListener('click', fetchFromLocaleStorage)
fetchTodos()
