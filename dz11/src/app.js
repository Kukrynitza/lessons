function reverseString(string) {
  return string.split('').reverse().join('')
}

function containsSubstring(string, substring) {
return string.includes(substring)
}

function reverseForArray(array) {
    console.log(array.reverse())
}

let string = 'Hello World'
console.log(`Длина ${string.length}`)
string = reverseString(string)
console.log(`Реверс ${string}`)
console.log(`Содержит подстроку ${containsSubstring(string, 'eH')}`)
const array = ['string', 5]
console.log(`Количество элементов ${array.length}`)
array.push(true)
array.unshift('c++ gadost')
array.push('pork wings')
array.unshift(11)
console.log(`Новое количество элементов ${array.length}`)
const newArray = array.slice(0,2)
console.log(newArray)
reverseForArray(newArray)
