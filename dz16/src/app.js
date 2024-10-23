// №0
const link = document.querySelector('a')
link.addEventListener('click', ((event) => { event.preventDefault() }))
const div = document.createElement('div')
document.querySelector('body').append(div)
// №1
function innerHtmlElement() {
  const firstElement = document.querySelector('.innerMi')
  firstElement.innerHTML = `
  <ul class="list">
    <li>январь</li>
    <li>февраль</li>
    <li>март</li>
  </ul>`
}
const innerElement = document.createElement('button')
innerElement.textContent = 'Изменить содержимое первого элемента'
innerElement.addEventListener('click', innerHtmlElement)
document.querySelector('div').append(innerElement)
// №2
function outerHtmlElement() {
  const element = document.querySelector('main')
  element.outerHTML = `
  <img src="https://i.pinimg.com/enabled_lo/564x/79/db/30/79db30c17af8f4f394a8103bb6d9c37f.jpg" alt="image">
  `
}
const outerElement = document.createElement('button')
outerElement.textContent = 'Заменить элемент'
outerElement.addEventListener('click', outerHtmlElement)
document.querySelector('div').append(outerElement)
// №3
function getModalWindow() {
  alert('Ты тоже?')
}
const alertElement = document.createElement('button')
alertElement.textContent = 'Открыть модальное окно'
alertElement.addEventListener('click', getModalWindow)
document.querySelector('div').append(alertElement)

// setTimeout(innerElement.removeEventListener('click', innerHtmlElement), 5000)
// setTimeout(alertElement.removeEventListener('click', getModalWindow), 5000)
outerElement.removeEventListener('click', outerElement)
// №4
function toConsole() {
  const event = document.querySelector('.text')
  // event.preventDefault()
  console.log('событие', event.target.value)
}
const submitElement = document.querySelector('.submit')
submitElement.addEventListener('submit', toConsole)
