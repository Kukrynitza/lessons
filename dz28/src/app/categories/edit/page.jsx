import { Suspense } from 'react'
import styles from './UpdateCategory.module.css'
import UpdateCategoryClient from './UpdateCategoryClient.jsx'

export default function UpdateCategory() {
  return (
    <>
      <title>Update CategoryPage</title>
      <h1 className={styles.h1}>Update category by ID</h1>
      <Suspense fallback={<p>Loading... Please wait...</p>}>
        <UpdateCategoryClient />
      </Suspense>
    </>
  )
}
