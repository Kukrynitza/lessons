'use client'
import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '../../_sourses/fetcher.js'
import styles from './CategoryList.module.css'

export default function CategoryListClient() {
  const { data, error, isLoading, mutate } = useSWR('https://happy-store.spacehub.workers.dev/api/categories', fetcher)
  if (isLoading) {
    return (<p>Loading...</p>)
  }
  if (error) {
    return (<p>Error</p>)
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={() => mutate()}>Reboot</button>
      <ul className={styles.ul}>
        {data.map((element) => (
          <li key={element.slug} className={styles.li}>
            <Link href={`/categories/edit/${element.slug}`}>
              <p>Name: {element.name}</p>
              <p>Slug: {element.slug}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
