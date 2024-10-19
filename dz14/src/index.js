const productsList = document.querySelectorAll('.products li')
productsList[1].style.color = 'yellow'
productsList.forEach((product) => {
  product.style.textDecoration = 'underline'
})

function changeText() {
  const text = document.querySelectorAll('.products li')
  text[0].textContent = 'смартфон'
}

function hideElement() {
  const text = document.querySelectorAll('.products li')
  text[2].style.visibility = 'hidden'
}

function addNewTextElement() {
  const newTextElement = document.createElement('li')
  const products = document.querySelector('.products')
  newTextElement.textContent = 'планшет'
  products.appendChild(newTextElement)
}
