function availability_in_stock(quantity){
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

function console_log(name, price){
  let string =`${name} стоит(-ят) ${price} рублей`
  console.log(string)
}


product = {
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


// function sum(one, two){
//   const result = one + two
//   return result
// }
// function divide(one, two){
//   const result = one / two
//   return result
// }
// function subtract(one, two){
//   const result = one - two
//   return result
// }


// let result = sum(2,6)
// console.log(result)
// result = divide(result,2)
// console.log(result)
// result = subtract(result,3)
// console.log(result)

