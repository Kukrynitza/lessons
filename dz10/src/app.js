function inStock(quantity) {
  if (quantity > 10) {
    console.log('Товара достаточно')
  } else if (quantity >= 1 && quantity <= 10) {
    console.log('Мало товара')
  } else {
    console.log('Товар закончился')
  }
}

function consoleLog(name, price) {
  const string = `${name} стоит(-ят) ${price} рублей`
  console.log(string)
}

const product = {
  name: 'Honda',
  price: 52000,
  quantity: 1
}
console.log(product)
inStock(product.quantity)
consoleLog(product.name, product.price)
let count = 0
for (let index = 1; index <= 10; index += 1) {
  count += index
}
console.log(count)
