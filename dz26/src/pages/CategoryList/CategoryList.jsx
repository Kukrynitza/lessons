import { Link } from 'react-router'
import useSWR from 'swr'
import styles from './CategoryList.module.css'

const fetcher = async (url) => {
  const response = await fetch(url)

  return response.json()
}
export default function CategoryList() {
  const { data, error, isLoading, mutate } = useSWR('https://happy-store.spacehub.workers.dev/api/categories', fetcher)
  if (isLoading) {
    return (<p>Loading...</p>)
  }
  if (error) {
    return (<p>Error</p>)
  }

  return (
    <>
      <title>Categories Page</title>
      <button type="button" className={styles.button} onClick={() => mutate()}>Reboot</button>
      <ul className={styles.ul}>
        {data.map((element) => (
          <li key={element.slug} className={styles.li}>
            <Link to={`/categories/${element.slug}/edit`}>
              <p>Name: {element.name}</p>
              <p>Slug: {element.slug}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
