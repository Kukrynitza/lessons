function createSVG() {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg")
  svg.setAttribute("width", "20")
  svg.setAttribute("height", "20")
  svg.setAttribute("fill", "#dce4fb")
  svg.setAttribute("viewBox", "0 0 256 256")
  svg.style.backgroundColor= '#D35B24'
  const path = document.createElementNS(svgNamespace, "path")
  path.setAttribute("d", "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z")
  svg.appendChild(path)
  return svg
}

function removeRequest(event){
  event.preventDefault()
  const checkbox = event.target
  const div = checkbox.parentNode
  const text = div.querySelector('label').outerText
  div.remove()
  window.localStorage.removeItem(text)
}

function checkboxIventRocket(event){
  event.preventDefault()
  const checkbox = event.target
  const label = checkbox.parentNode
  const completed = window.localStorage.getItem(label.innerText)
  if (completed ==='false') {
    setTimeout(() => {checkbox.style.backgroundColor= '#D35B24'}, 500)
    setTimeout(() => {label.prepend(createSVG()); checkbox.style.backgroundColor= '#19213f'; label.appendChild(checkbox)}, 1000)
    window.localStorage.setItem(label.innerText, JSON.stringify(true))
  }
  
  else{
    const svg = label.querySelector('svg')
    const checkboxes = label.querySelector('.checkbox')
    checkboxes.remove()
    setTimeout(() => {svg.style.backgroundColor= '#D35B24'},400)
    const newRequest = document.createElement('input')
    newRequest.type = 'checkbox'
    newRequest.className = 'checkbox'
    newRequest.style.backgroundColor= '#D35B24'
    newRequest.addEventListener('click', checkboxIventRocket)
    setTimeout(() => {label.prepend(newRequest); svg.remove()},800)
    setTimeout(() => {newRequest.style.backgroundColor= '#dce4fb'},1100)
  window.localStorage.setItem(label.innerText, JSON.stringify(false))
  }
}

function newRequests(event){
  event.preventDefault()
  const form = event.currentTarget
  let text = form.querySelector('.text').value;
  if (!text){
return
}

  window.localStorage.setItem(text, JSON.stringify(false))
  const div = document.createElement('div')
  const newLabel = document.createElement('label')
  const newRequest = document.createElement('input')
  const newRemoveRequest =document.createElement('input')
  newRequest.type = 'checkbox'
  newRemoveRequest.type = 'checkbox'
  newRemoveRequest.className = 'remove-request'
  newRequest.className = 'checkbox'
  newLabel.className = 'label'
  newRequest.addEventListener('click', checkboxIventRocket)
  newRemoveRequest.addEventListener('click', removeRequest)
  newLabel.appendChild(newRequest)
  newLabel.appendChild(document.createTextNode(text))
  div.appendChild(newLabel)
  div.appendChild(newRemoveRequest)
  document.querySelector('.requests').appendChild(div)

}
function clearLocalStorage(){
window.localStorage.clear()
const form = document.querySelector('.requests')
form.innerHTML = '<form action="get" class="requests"></form>'
}
async function fetchTodos(event){
  event.preventDefault()
  const requests = await fetch('https://dummyjson.com/todos?limit=3')
  const {todos} = await requests.json()
  todos.forEach(element => {
    if(window.localStorage.getItem(element.todo) === null){
    window.localStorage.setItem(element.todo, JSON.stringify(element.completed))
    const div = document.createElement('div')
    const newLabel = document.createElement('label')
    const newRequest = document.createElement('input')
    const newRemoveRequest =document.createElement('input')
    newRemoveRequest.type = 'checkbox'
    newRemoveRequest.className = 'remove-request'
    newRemoveRequest.addEventListener('click', removeRequest)
      newLabel.className = 'label'
      newRequest.type = 'checkbox'
      newRequest.className = 'checkbox'
    if(window.localStorage.getItem(element.todo) === 'false'){
    newRequest.addEventListener('click', checkboxIventRocket)
    newLabel.appendChild(newRequest)
    newLabel.appendChild(document.createTextNode(element.todo))
    }
    else{
      newLabel.prepend(createSVG())
      newRequest.style.backgroundColor= '#19213f'
      newRequest.addEventListener('click', checkboxIventRocket)
      newLabel.appendChild(document.createTextNode(element.todo))
      newLabel.appendChild(newRequest)
    }
    div.appendChild(newLabel)
    div.appendChild(newRemoveRequest)
    document.querySelector('.requests').appendChild(div)
    }
  });
}
function fetchFromLocaleStorage(event){
  event.preventDefault()
  const keys = Object.keys(localStorage)
  keys.forEach((key) => {
    const div = document.createElement('div')
    const newLabel = document.createElement('label')
    const newRequest = document.createElement('input')
    const newRemoveRequest =document.createElement('input')
    newRemoveRequest.type = 'checkbox'
    newRemoveRequest.className = 'remove-request'
    newRemoveRequest.addEventListener('click', removeRequest)
      newLabel.className = 'label'
      newRequest.type = 'checkbox'
      newRequest.className = 'checkbox'
      if(window.localStorage.getItem(key) === 'false'){
    newRequest.addEventListener('click', checkboxIventRocket)
    newLabel.appendChild(newRequest)
    newLabel.appendChild(document.createTextNode(key))
    }
    else{
      newLabel.prepend(createSVG())
      newRequest.style.backgroundColor= '#19213f'
      newRequest.addEventListener('click', checkboxIventRocket)
      newLabel.appendChild(document.createTextNode(key))
      newLabel.appendChild(newRequest)
    }
    div.appendChild(newLabel)
    div.appendChild(newRemoveRequest)
    document.querySelector('.requests').appendChild(div)
  })
  const button = event.target
  button.remove()
}
const addNewTodos = document.querySelector('.add-new-todos')
addNewTodos.addEventListener('submit', newRequests)
const buttonClear = document.querySelector('.clear')
buttonClear.addEventListener('click', clearLocalStorage)
const buttonFetch = document.querySelector('.fetch')
const buttonFetchFromLocaleStorage = document.querySelector('.fetch-from-locale-storage')
buttonFetchFromLocaleStorage.addEventListener('click', fetchFromLocaleStorage)
buttonFetch.addEventListener('click', fetchTodos)