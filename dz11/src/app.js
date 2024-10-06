function rever(str) {
  return str.split('').reverse().join('')
}

function find(str, substring) {
  if (str.indexOf(substring) !== -1) {
    return true
  }

  return false
}

function reverForMass(mass) {
  for (let i = mass.length - 1; i != -1; i--) {
    console.log(mass[i])
  }
}

function main() {
  let str = 'Hello World'
  console.log(`Длина ${str.length}`)
  str = rever(str)
  console.log(`Реверс ${str}`)
  console.log(`Содержит подстроку ${find(str, 'He')}`)
  const mass = ['string', 5]
  console.log(`Количество элементов ${mass.length}`)
  mass.push(true)
  mass.unshift('c++ gadost')
  console.log(`Новое количество элементов ${mass.length}`)
  while (mass.length > 2) {
    mass.pop()
  }
  for (const el of mass) {
    console.log(el)
  }
  reverForMass(mass)
}
main()
