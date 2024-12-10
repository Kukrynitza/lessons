'use client'
import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import styles from './UpdateCategory.module.css'

const fetcher = async (url) => {
  const response = await fetch(url)

  return response.json()
}
export default function UpdateCategory() {
  const router = useRouter()
  const [typingSlug, setTypingSlug] = useState('')
  const [typingName, setTypingName] = useState('')
  const { data, error, isLoading } = useSWR('https://happy-store.spacehub.workers.dev/api/categories', fetcher)
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const oldSlug = formData.get('oldSlug')
    const newName = formData.get('newName')
    const category = data.find((element) => element.slug === oldSlug)
    const slug = newName.toLowerCase().replace(' ', '-')
    try {
      const response = await fetch(
        `https://happy-store.spacehub.workers.dev/api/categories/${category.id}`,
        {
          body: JSON.stringify({
            name: newName,
            slug
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'PATCH'
        }
      )
      if (!response) {
        throw new Error('Failed to update category')
      }
      router.push('/categories')
    } catch (err) {
      setTypingSlug('')
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

  return (
    <>
      <title>Update CategoryPage</title>
      <h1 className={styles.h1}>Update category by ID</h1>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          name="oldSlug"
          className={styles.input}
          style={{
            border: `5px solid ${typingSlug ? '#46A758' : '#E54D2E'}`
          }}
          value={typingSlug}
          placeholder="Enter old slug"
          onChange={(element) => setTypingSlug(element.target.value)}
        />
        <input
          type="text"
          name="newName"
          className={styles.input}
          style={{
            '--input-color': typingName ? '#46A758' : '#E54D2E'
          }}
          value={typingName}
          placeholder="Enter new name"
          onChange={(element) => setTypingName(element.target.value)}
        />
        <button
          type="submit"
          className={styles.button}
          style={typingSlug && typingName ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !typingSlug || !typingName}
        >
          Update
        </button>
      </form>
    </>
  )
}
