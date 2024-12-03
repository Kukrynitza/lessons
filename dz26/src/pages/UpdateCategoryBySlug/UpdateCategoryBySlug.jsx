import { useActionState, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import useSWR from 'swr'
import styles from './UpdateCategoryBySlug.module.css'

export default function UpdateCategoryBySlug() {
  const fetcher = async (url) => {
    const response = await fetch(url)

    return response.json()
  }
  const { slug } = useParams()
  const navigate = useNavigate()
  const [typingName, setTypingName] = useState('')
  const { data, error, isLoading } = useSWR(`https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`, fetcher)
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const newName = formData.get('newName')
    const newSlug = newName.toLowerCase()
    try {
      const response = await fetch(
        `https://happy-store.spacehub.workers.dev/api/categories/${data.id}`,
        {
          body: JSON.stringify({
            name: newName,
            slug: newSlug
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'PATCH'
        }
      )
      if (!response) {
        throw new Error('Failed to update category')
      }
      navigate('/categories')
    } catch (err) {
      setTypingName('')
      console.log(err)
      // eslint-disable-next-line no-alert
      alert('Ошибка при обновлении категории')
    }
  })
  if (isLoading) {
    return (
      <title>Loading...</title>
    )
  }
  if (error) {
    return (
      <p>Error</p>
    )
  }
  useEffect(() => {
    setTypingName(data?.name)
  }, [])

  return (
    <>
      <title>UpdateCategoryPage</title>
      <h1 className={styles.h1}>Update category by ID</h1>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          name="newName"
          className={styles.input}
          style={{
            border: `5px solid ${typingName ? '#46A758' : '#E54D2E'}`
          }}
          value={typingName}
          placeholder="Enter new name"
          onChange={(element) => setTypingName(element.target.value)}
        />
        <button
          type="submit"
          className={styles.button}
          style={typingName ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !typingName}
        >
          Update
        </button>
      </form>
    </>
  )
}
