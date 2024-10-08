function sum(first, second){
  return first + second
}

function subtraction(first, second){
  return first - second
}

function sumOrSubtraction(first, second, operator){
    return operator(first, second)
}

console.log(sumOrSubtraction(3, 2, subtraction))