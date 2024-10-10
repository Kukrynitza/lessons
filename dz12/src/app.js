function checkIfTheNumberIsEvenOrOdd(number) {
  try {
    if (!Number.isInteger(number)) {
      throw new Error(`${number} - не является целым числом`)
    }
    if (number % 2 === 0) {
      return 'Четное'
    }
    return 'Нечетное'
  } catch (error) {
    return `${number} - не является целым числом`
  }
}

function searchForCarWithGivenColor(cars, color) {
  const car = cars.find((findCar) => findCar.color === color)
  if (car) {
    return true
  }
  return false
}

let counter = 0
while (counter <= 20) {
  counter += 1
  if (counter > 15) {
    break
  }
  if (counter === 10 || counter === 13) {
    continue
  }
  console.log(counter)
  console.log(checkIfTheNumberIsEvenOrOdd(counter))
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
]

const tasks = [
  { title: 'Task 1', completed: true },
  { title: 'Task 2', completed: false },
  { title: 'Task 3', completed: true }
]

const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 92 },
  { name: 'Alex', grade: 78 }
]

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]

const cars = [
  { model: 'Tesla', color: 'red' },
  { model: 'BMW', color: 'blue' },
  { model: 'Audi', color: 'black' }
]

const purchases = [
  { item: 'Book', date: '2023-09-10' },
  { item: 'Laptop', date: '2023-09-05' },
  { item: 'Phone', date: '2023-09-01' }
]

for (const user of users) {
  console.log(`Имя пользователя: ${user.name},Возраст: ${user.age}`)
}

const newProducts = products.map((product) => ({
  name: product.name,
  price: product.price,
  total: product.price * 1.1
}))

const newTasks = tasks.filter((task) => task.completed)
const newStudents = students.sort((a, b) => b.grade - a.grade)
console.log(newProducts)
console.log(newTasks)
console.log(newStudents)
console.log(books.find((book) => book.author === 'George Orwell'))
console.log(searchForCarWithGivenColor(cars, 'white'))
console.log(purchases.reverse())
