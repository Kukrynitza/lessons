'use client'
import { useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation.js'
import { maxLength, minLength, parse, pipe, string, ValiError } from 'valibot'
import styles from './CreateCategory.module.css'

export default function CreateCategory() {
  const stringShema = pipe(
    string(),
    minLength(3, 'The line must contain at least 3 characters'),
    maxLength(20, 'The line must contain a maximum 20 characters'),
    (input) => {
      if (input.includes('-')) {
        throw new Error('The line must not contain a hyphen (-)')
      }

      return input
    }

  )
  const [isError, setIsError] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [typing, setTyping] = useState('')
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
      console.log(error)
      setIsTyping(false)
      if (error instanceof ValiError) {
        setIsError(error.errors[0].message)
      } else {
        // eslint-disable-next-line no-alert
        alert(error)
      }
    }
  })

  return (
    <>
      <title>Create Category Page</title>
      <h1 className={styles.h1}>Create new name</h1>
      <form action={formAction} className={styles.form}>
        {isError && <p className={styles.error}>{isError}</p>}
        <input
          type="text"
          name="name"
          className={styles.input}
          style={{ '--input-color': isTyping && typing ? '#46A758' : '#E54D2E' }}
          value={typing}
          placeholder="Enter name"
          onChange={(element) => {
            setTyping(element.target.value)
            setIsTyping(true)
            setIsError('')
          }}
        />
        <button
          type="submit"
          className={styles.button}
          style={typing && isTyping ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !typing || !isTyping}
        >
          Create
        </button>
      </form>
    </>
  )
}
