import removeRequest from './remove-request.js'
import checkboxIventRocket from './checkbox-ivent-rocket.js'
import createSVG from './create-svg.js'

export default async function fetchTodos() {
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
        newLabel.prepend(createSVG())
        newRequest.style.backgroundColor = '#19213f'
        newRequest.addEventListener('click', checkboxIventRocket)
        newLabel.appendChild(document.createTextNode(element.todo))
        newLabel.appendChild(newRequest)
      }
    }
  })
}
