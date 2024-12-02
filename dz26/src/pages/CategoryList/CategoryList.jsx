import useSWR from 'swr'
import styles from './CategoryList.module.css'

export default function CategoryList() {
  const fetcher = async (url) => {
    const response = await fetch(url)

    return response.json()
  }
  const { data, error, isLoading, mutate } = useSWR('https://happy-store.vercel.app/api/categories', fetcher)
  if (isLoading) {
    return (<p>Loading...</p>)
  }
  if (error) {
    return (<p>Error</p>)
  }

  return (
    <>
      <title>CategoryList</title>
      <button type="button" className={styles.button} onClick={() => mutate()}>Reboot</button>
      <ul className={styles.ul}>
        {data.map((element) => (
          <li key={element.slug} className={styles.li}>
            <p>Name: {element.name}</p>
            <p>Slug: {element.slug}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
