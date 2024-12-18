'use client'
import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation.js'
import { parse } from 'valibot'
import stringShema from '../../../_sourses/stringShema.js'
import styles from './CreateCategory.module.css'

export default function CreateCategory() {
  const [isError, setIsError] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const router = useRouter()
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    try {
      const name = formData.get('name')
      parse(stringShema, name)
      const slug = name.toLowerCase().replace(' ', '-')
      await fetch(
        'https://happy-store.spacehub.workers.dev/api/categories',
        {
          body: JSON.stringify({
            name,
            slug
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      )
      router.push('/categories')
    } catch (error) {
      setIsTyping(false)
      console.error(error)
      setIsError(error.message)
    }

    return formData.get('name')
  }, '')

  return (
    <form action={formAction} className={styles.form}>
      {isError && <p className={styles.error}>{isError}</p>}
      <input
        type="text"
        name="name"
        className={styles.input}
        style={{ '--input-color': isTyping ? '#46A758' : '#E54D2E' }}
        defaultValue={message}
        placeholder="Enter name"
        onChange={() => {
          setIsTyping(true)
          setIsError('')
        }}
      />
      <button
        type="submit"
        className={styles.button}
        style={isTyping ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
        disabled={isPending || !isTyping}
      >
        Create
      </button>
    </form>
  )
}
