function AvailabilityInStock(quantity){
  if (quantity > 10) {
    console.log(`Товара достаточно`)
  }
  else if(1 <= quantity && quantity <= 10){
    console.log(`Мало товара`)
  }
  else{
    console.log(`Товар закончился`)
  }
}

function ConsoleLog(name, price){
  const string =`${name} стоит(-ят) ${price} рублей`
  console.log(string)
}


const product = {
  name: 'Honda',
  price: 52000,
  quantity: 1
}

console.log(product)
availability_in_stock(product.quantity)
console_log(product.name, product.price)
let count = 0;
for (let index = 1; index <= 10; index++) {
  count +=index;
}
console.log(count)