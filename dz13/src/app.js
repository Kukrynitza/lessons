function isSomeProductInStock(productsList) {
  return productsList.some((product) => product.inStock)
}

function makeUserTotalBalance(transactions) {
  return transactions.reduce((result, transaction) => (
    transaction.type === 'income'
      ? result + transaction.amount
      : result - transaction.amount
  ), 0)
}

function flattenArray(array) {
  return array.flat(Infinity)
}
function getObjectKeysOrValues(object, type) {
  return type === 'key' ? Object.keys(object) : Object.values(object)
}

function logCartProducts(cart) {
  Object.entries(cart).forEach(([product, count]) => {
    console.log(`${product}: ${count} шт.`)
  })
}

function mergeSettings(defaultSettings, userPreferences) {
  return { ...defaultSettings, ...userPreferences }
}

function checkUserAge(user) {
  try {
    if (user.age < 18) {
      throw new Error('Меньше 18 лет')
    }
    console.log('Больше 18 лет(')
  } catch (error) {
    if (error.message === 'Меньше 18 лет') {
      console.log('Меньше 18 лет(')
    }
  }
}

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('Число больше 10')
    } else {
      reject(new Error('Число меньше или равно 10'))
    }
  })
}

function delayMessage(message, time) {
  setTimeout(() => {
    console.log(message)
  }, time)
}

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса')
    }
    const data = await response.json()
    console.log(data.products[0])
  } catch (error) {
    console.log('Не удалось получить продукт', error)
  }
}

const nestedArray = [[1, 2], [3, [4, 5]], 6]
console.log(flattenArray(nestedArray))
const products = [
  { id: 1, name: 'Телефон', inStock: true },
  { id: 2, name: 'Ноутбук', inStock: false },
  { id: 3, name: 'Часы', inStock: false }
]
console.log(isSomeProductInStock(products))
const transactions = [
  { id: 1, type: 'income', amount: 500 },
  { id: 2, type: 'expense', amount: 100 },
  { id: 3, type: 'income', amount: 200 },
  { id: 4, type: 'expense', amount: 50 }
]

console.log(makeUserTotalBalance(transactions))
const user = {
  name: 'John',
  email: 'john@example.com',
  age: 13
}
console.log(getObjectKeysOrValues(user, 'key'))
console.log(getObjectKeysOrValues(user, 'val'))
const cart = {
  apple: 2,
  banana: 3,
  orange: 1
}
logCartProducts(cart)
const defaultSettings = {
  theme: 'light',
  notifications: true,
  language: 'en'
}

const userPreferences = {
  language: 'ru',
  notifications: false
}
console.log(mergeSettings(defaultSettings, userPreferences))
checkUserAge(user)
checkNumber(12)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
delayMessage('Hello World', 1000)
fetchProducts()
