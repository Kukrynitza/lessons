async function getRecept() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  const recept = data.recipes.find((date) => date.id === 5)
  console.log(recept.tags)
  return recept
}

async function findRecept(query) {
  const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
  const data = response.json()
  return data
}

async function getTagCounter(tag) {
  const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`)
  const data = await response.json()
  const counter = data.recipes.length
  return counter
}

async function getReceptWithTagCounter(num) {
  const response = await fetch(`https://dummyjson.com/recipes/${num}`)
  const data = await response.json()
  const tagArray = data.tags
  console.log(tagArray)
  const tagCounter = await Promise.all(
    tagArray.map(async (tag) => [tag, await getTagCounter(tag)])
  )
  const resultTagCounter = tagCounter.reduce((result, tagCount) => (
    { ...result, [tagCount[0]]: tagCount[1] }
  ), {})
  const result = {
    id: data.id,
    title: data.name,
    recipesWithSameTags: resultTagCounter
  }
  console.log(result)
  // {
//  id: 7, // id рецепта
//  title: 'Tomato Basil Bruschetta', // name рецепта
//  recipesWithSameTags: {
//    Bruschetta: 2, // количество рецептов с тегом Bruschetta
//    Italian: 6 // количество рецептов с тегом Italian
//  }
}

// getRecept().then((data) => console.log(data))
// findRecept('Margherita').then((date) => console.log(date))
async function main() {
  // findRecept('Margherita').then((data) => console.log(data))
  // findRecept('Vegetarian').then((data) => console.log(data))
  // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
  // await Promise.all(
  //   [findRecept('Margherita').then((data) => console.log(data)),
  //     findRecept('Vegetarian').then((data) => console.log(data))]
  // )
  await getReceptWithTagCounter(7)
}

main()
