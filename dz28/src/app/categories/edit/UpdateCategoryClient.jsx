'use client'

import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import fetcher from '../../../_sourses/fetcher.js'
import styles from './UpdateCategory.module.css'

export default function UpdateCategory() {
  const router = useRouter()
  const [typingName, setTypingName] = useState('')
  const { data, error, isLoading } = useSWR('https://happy-store.spacehub.workers.dev/api/categories', fetcher)
  const [formState, formAction, isPending] = useActionState(async (_, formData) => {
    const category = data.find((element) => element.slug === formData.get('oldSlug'))
    const slug = formData.get('newName').toLowerCase().replace(' ', '-')
    try {
      const response = await fetch(
        `https://happy-store.spacehub.workers.dev/api/categories/${category.id}`,
        {
          body: JSON.stringify({
            name: formData.get('newName'),
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
      setTypingName('')
      console.error(err)
      // eslint-disable-next-line no-alert
      alert('Ошибка при обновлении категории')
    }

    return {
      newName: formData.get('newName'),
      oldSlug: formData.get('oldSlug')
    }
  }, {
    newName: '',
    oldSlug: ''
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
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        name="oldSlug"
        className={styles.input}
        style={{
          border: `5px solid ${typingName ? '#46A758' : '#E54D2E'}`
        }}
        defaultValue={formState.oldSlug}
        placeholder="Enter old slug"
        onChange={(element) => setTypingName(element.target.value)}
      />
      <input
        type="text"
        name="newName"
        className={styles.input}
        style={{
          '--input-color': typingName ? '#46A758' : '#E54D2E'
        }}
        defaultValue={formState.newName}
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
  )
}
