const products = [
  { name: 'Product 1', price: 10, quantity: 5 },
  { name: 'Product 2', price: 20, quantity: 0 },
  { name: 'Product 3', price: 30, quantity: 10 }
]

const availableProducts = products.filter((product) => product.quantity !== 0)

console.log(availableProducts)
const newAvailableProducts = availableProducts.map((product) => ({
  name: product.name,
  price: product.price,
  total: product.quantity * product.price
}))

console.log(newAvailableProducts.sort((a, b) => b.total - a.total))
