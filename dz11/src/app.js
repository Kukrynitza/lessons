function Rever(str){
return str.split("").reverse().join("")
}

function Find(str, substring){
  if(str.indexOf(substring) !== -1){
    return true
  }
  else{
    return false
  }
}
function ReverForMass(mass){
   for(let i = mass.length -1; i !=-1; i--){
    console.log(mass[i])
   }
}

function main(){
  let str = "Hello World"
  console.log('Длина ' + str.length)
  str = Rever(str)
  console.log('Реверс ' + str)
  console.log('Содержит подстроку '+ Find(str, 'He'))
  let mass = ['string', 5]
  console.log('Количество элементов ' + mass.length)
  mass.push(true)
  mass.unshift('c++ gadost')
  console.log('Новое количество элементов ' + mass.length)
  while(mass.length > 2){
    mass.pop();
  }
  for(el of mass){
    console.log(el)
  }
  ReverForMass(mass)
}

main()