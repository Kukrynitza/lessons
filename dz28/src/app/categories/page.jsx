import { Suspense } from 'react'
import CategoryListClient from './CategoryListClient.jsx'

export default function CategoryList() {
  return (
    <>
      <title>Categories Page</title>
      <Suspense fallbackfallback={<p>Loading... Please wait...</p>}>
        <CategoryListClient />
      </Suspense>
    </>
  )
}
