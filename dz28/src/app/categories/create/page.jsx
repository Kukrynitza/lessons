import styles from './CreateCategory.module.css'
import CreateCategoryClient from './CreateCategoryClient.jsx'

export default function CreateCategory() {
  return (
    <>
      <title>Create Category Page</title>
      <h1 className={styles.h1}>Create new name</h1>
      <CreateCategoryClient />
    </>
  )
}
