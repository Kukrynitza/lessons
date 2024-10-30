// №0
const link = document.querySelector('a')
link.addEventListener('click', ((event) => { event.preventDefault() }))
const div = document.createElement('div')
document.querySelector('body').append(div)
// №1
function innerButtonClick() {
  const firstElement = document.querySelector('.inner-mi')
  firstElement.innerHTML = `
  <ul class="list">
    <li>январь</li>
    <li>февраль</li>
    <li>март</li>
  </ul>`
}
const createUserButton = document.createElement('button')
createUserButton.textContent = 'Изменить содержимое первого элемента'
createUserButton.addEventListener('click', innerButtonClick)
document.querySelector('div').append(createUserButton)
// №2
function outerHtmlElement() {
  const element = document.querySelector('main')
  element.outerHTML = `
  <img src="https://i.pinimg.com/enabled_lo/564x/79/db/30/79db30c17af8f4f394a8103bb6d9c37f.jpg" alt="sky-men">
  `
}
const newButton = document.createElement('button')
newButton.textContent = 'Заменить элемент'
newButton.addEventListener('click', outerHtmlElement)
document.querySelector('div').append(newButton)
// №3
function getModalWindow() {
  const modalWindow = prompt('What do you need to watch out for in C++ to make inheritance work?')
  if(modalWindow === 'include')
    {
  alert(modalWindow)
}
else{
  alert(modalWindow + ' - thats what I thought, but in reality <include>')
}
return
}
const updateTaskButton = document.createElement('button')
updateTaskButton.textContent = 'Открыть модальное окно'
updateTaskButton.addEventListener('click', getModalWindow)
document.querySelector('div').append(updateTaskButton)

setTimeout(innerElement.removeEventListener('click', innerHtmlElement), 5000)
setTimeout(alertElement.removeEventListener('click', getModalWindow), 5000)
outerElement.removeEventListener('click', outerElement)
// №4
function toConsole() {
  const submitElement = document.querySelector('.text').value
  event.preventDefault()
  console.log('событие', submitElement)
}
const submitElement = document.querySelector('.submit')
submitElement.addEventListener('submit', toConsole)
// №5
async function getRequest(event) {
  event.preventDefault()
  const query = document.querySelector('aside form input').value
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    if (!response.ok) {
      throw new Error('Ошибка')
    }
    const { products } = await response.json()
    const listOfProducts = products.map(({ title }) => title)
    const ul = document.createElement('ul')
    document.querySelector('main').append(ul)
    listOfProducts.forEach((product) => {
      const li = document.createElement('li')
      li.textContent = product
      document.querySelector('ul').append(li)
    })
    console.log(listOfProducts)
  } catch (error) {
    console.error('Произошла ошибка при загрузке данных:', error)
  }
}

const button = document.createElement('button')
const textRequest = document.createElement('input')
textRequest.type = 'text'
textRequest.className = 'text'
textRequest.placeholder = 'Введите запрос'
button.textContent = 'Искать'
button.addEventListener('click', getRequest)
document.querySelector('aside form').append(textRequest, buttonRequest)
