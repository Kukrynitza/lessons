function entriesArray(array) {
  return array.flat(Infinity)
}

// function setKeysAndObjectInfo(user) {
//   const entriesUser = Object.entries(user)
//   const keyUser = []
//   for (const key of entriesUser) {
//     key.pop()
//     keyUser.push(key)
//   }
//   console.log(keyUser.flat())
// }
function setKeysAndObjectInfo(user, type) {
  if (type === 'key') {
    const newUser = Object.keys(user)
    return newUser
  }
  const newUser = Object.values(user)
  return newUser
}

function logInCheck(cart) {
  const newCart = Object.entries(cart)
  for (const logCart of newCart) {
    console.log(`${logCart[0]}: ${logCart[1]} шт.`)
  }
}

function mergeSettings(defaultSettings, userPreferences) {
  const resultSettings = { ...defaultSettings, ...userPreferences }
  return resultSettings
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
      reject('Число меньше или равно 10')
    }
  })
}

function delayedMessage(string, time) {
  setTimeout(() => {
    console.log(string)
  }, time)
}

async function fetchProducts() {
  try {
    const data = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    if (!data.ok) {
      throw new Error('Не найден json')
    }
    const newData = await data.json()
    console.log(newData.products[0])
  } catch (error) {
    console.log('Не удалось получить данные')
  }
}

const nestedArray = [[1, 2], [3, [4, 5]], 6]
console.log(entriesArray(nestedArray))
const products = [
  { id: 1, name: 'Телефон', inStock: true },
  { id: 2, name: 'Ноутбук', inStock: false },
  { id: 3, name: 'Часы', inStock: false }
]
console.log(products.some((product) => product.inStock === true))
const transactions = [
  { id: 1, type: 'income', amount: 500 },
  { id: 2, type: 'expense', amount: 100 },
  { id: 3, type: 'income', amount: 200 },
  { id: 4, type: 'expense', amount: 50 }
]
const newTransactions = transactions.reduce((result, transaction) => result + transaction.amount, 0)
console.log(newTransactions)
const user = {
  name: 'John',
  email: 'john@example.com',
  age: 13
}
console.log(setKeysAndObjectInfo(user, 'key'))
console.log(setKeysAndObjectInfo(user, 'val'))
const cart = {
  apple: 2,
  banana: 3,
  orange: 1
}
logInCheck(cart)
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
delayedMessage('Hello World', 1000)
fetchProducts()
