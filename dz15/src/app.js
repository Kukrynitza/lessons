async function getInfoFromDummyjsonProductsCategories() {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = response.json()
  return data
}

async function getCountFromDummyjsonProductsCategories() {
  const counter = await getInfoFromDummyjsonProductsCategories()
  return counter.length
}

async function findCategories(data, categories) {
  const result = data.find((category) => category.name === categories)
  if (result !== undefined) {
    return result
  }
  return 0
}

async function listOfProductsFromCategory(categories) {
  const trueCategory = categories.filter((category) => category !== 0)
  const listOfProducts = await Promise.all(trueCategory.map(
    async (category) => {
      const response = await fetch(category.url)
      const data = await response.json()
      return data.products.map((element) => ({
        id: element.id,
        title: element.title
      }))
    }
  ))

  return listOfProducts
}
async function listOfProductsWhisProductPriseFromCategory(categories) {
  const trueCategory = categories.filter((category) => category !== 0)
  const listOfProducts = await Promise.all(trueCategory.map(
    async (category) => {
      const response = await fetch(category.url)
      const data = await response.json()
      return data.products.map((element) => ({
        [element.title]: element.price
      }))
    }
  ))
  const results = listOfProducts.map((dadResult) => dadResult.reduce((result, titleAndPrice) => ({
    ...result,
    ...titleAndPrice
  }), {}))
  return results
}

async function findProductsByCategory(categories) {
  const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
  const data = await response.json()
  const filterData = data.products.filter((element) => element.category === categories)
  return filterData.map((info) => ({ id: info.id, title: info.title }))
}

async function findProductsByCategoryAndCount(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await response.json()
  return data.products.length
}

async function findProductsByCategoryAndMaxMinAverageCostAndProductsList(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await response.json()
  const costArray = data.products.map((cost) => cost.price)
  const productsList = data.products.map((product) => product.title)
  const maxCost = costArray.reduce((result, cost) => (result >= cost ? result : cost))
  const minCost = costArray.reduce((result, cost) => (result < cost ? result : cost))
  const averageCost = Math.round(
    (costArray.reduce((result, cost) => result + cost, 0) / costArray.length) * 100
  ) / 100
  return {
    products: productsList,
    cheapestPrice: minCost,
    mostExpensivePrice: maxCost,
    averagePrice: averageCost
  }
}

async function getProductsGroupedByCategory(type) {
  const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
  const data = await response.json()
  const product = data.products
  const categories = product.reduce((result, elementFromProduct) => {
    if (!result.some((unic) => unic === elementFromProduct.category)) {
      result.push(elementFromProduct.category)
    }
    return result
  }, [])
  if (type === 'info') {
    const categoriesWithInfo = await Promise.all(categories.map(async (category) => (
      { [category]: await findProductsByCategory(category) }
    )))
    const result = categoriesWithInfo.reduce((res, category) => ({ ...res, ...category }), {})
    return result
  }
  if (type === 'count') {
    return Promise.all(categories.map(async (category) => (
      { [category]: await findProductsByCategoryAndCount(category) }
    )))
  }
  const categoriesWithInfo = await Promise.all(categories.map(async (category) => (
    { [category]: await findProductsByCategoryAndMaxMinAverageCostAndProductsList(category) }
  )))
  return categoriesWithInfo
}
async function main() {
  console.log(await getInfoFromDummyjsonProductsCategories())
  console.log(await getCountFromDummyjsonProductsCategories())
  const categories = await Promise.all([
    findCategories(await getInfoFromDummyjsonProductsCategories(), 'Groceries'),
    findCategories(await getInfoFromDummyjsonProductsCategories(), 'Electronics'),
    findCategories(await getInfoFromDummyjsonProductsCategories(), 'Furniture')
  ])
  console.log(categories)
  console.log(await listOfProductsFromCategory(categories))
  console.log(await listOfProductsWhisProductPriseFromCategory(categories))
  console.log(await getProductsGroupedByCategory('count'))
  console.log(await getProductsGroupedByCategory('info'))
  await getProductsGroupedByCategory('res').then((data) => console.log(JSON.stringify(data, null, 2)))
}

main()
