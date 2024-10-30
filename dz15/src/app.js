async function getProductCategories() {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = response.json()
  return data
}

function findCategoryByName(categories, categoryName) {
  // console.log(categories)
  return categories.find(({ name }) => categoryName === name)
}

function getProductsByCategories(categories) {
  return Promise.all(
    categories.filter((category) => category).map(
      async ({ url }) => {
        const response = await fetch(url)
        const { products } = await response.json()
        return products.map(({ id, title }) => ({
          id,
          title
        }))
      }
    )
  )
}

function getProductPricesByCategories(categories) {
  return Promise.all(categories.filter((category) => category).map(
    async ({ url }) => {
      const response = await fetch(url)
      const { products } = await response.json()
      return Object.fromEntries(products.map(({ price, title }) => [title, price]))
    }
  ))
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

async function findCategoryProductsStats(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await response.json()
  const costArray = data.products.map((cost) => cost.price)
  const productsList = data.products.map((product) => product.title)
  const maxCost = Math.max(...costArray)
  const minCost = Math.min(...costArray)
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

async function getListOfCategory() {
  const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
  const { products } = await response.json()
  return products.reduce((result, elementFromProduct) => {
    if (!result.some((unic) => unic === elementFromProduct.category)) {
      result.push(elementFromProduct.category)
    }
    return result
  }, [])
}

async function getProductsGroupedByCategoryAndCount() {
  const categories = await getListOfCategory()
  return Promise.all(categories.map(async (category) => ({
    [category]: await findProductsByCategoryAndCount(category)
  })))
}

function getProduct(products, category) {
  const listOfProducts = products.filter((product) => product.category === category)
  return listOfProducts.map((element) => ({
    id: element.id,
    title: element.title
  }))
}

async function getProductsGroupedByCategoryForInfo() {
  const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
  const { products } = await response.json()
  const categories = await getListOfCategory()
  const categoriesWithInfo = categories.map((category) => (
    {
      [category]: getProduct(products, category)
    }
  ))
  const result = categoriesWithInfo.reduce((res, category) => ({ ...res, ...category }), {})

  return result
}

async function groupProductsByCategoryWithCostStats() {
  const categories = await getListOfCategory()
  return Promise.all(categories.map(async (category) => (
    { [category]: await findCategoryProductsStats(category) }
  )))
}

async function main() {
  const productCategories = await getProductCategories()
  console.log(productCategories)
  console.log(productCategories.length)
  const categories = [
    findCategoryByName(productCategories, 'Groceries'),
    findCategoryByName(productCategories, 'Electronics'),
    findCategoryByName(productCategories, 'Furniture')
  ]
  console.log(await getProductsByCategories(categories))
  console.log(await getProductPricesByCategories(categories))
  console.log(await getProductsGroupedByCategoryAndCount())
  console.log(await getProductsGroupedByCategoryForInfo())
  console.log(await groupProductsByCategoryWithCostStats())
}

main()
