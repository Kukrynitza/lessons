import { Link, useSearchParams } from 'react-router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const response = await fetch(url)

  return response.json()
}

export default function Categories() {
  const [searchParams] = useSearchParams()
  const { data: categories, error, isLoading } = useSWR(
    'https://happy-store.vercel.app/api/categories',
    fetcher
  )

  const query = searchParams.get('query')
  const limit = searchParams.get('limit')

  // eslint-disable-next-line no-console
  console.log('query and limit search params', query, limit)

  if (isLoading) {
    return <p>...</p>
  }

  if (error) {
    return <p>Unexpected error, please try again later</p>
  }

  return (
    <>
      <title>Categories</title>
      <h1>Categories</h1>
      <Link to="/categories/create">Create a new caterory</Link>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
