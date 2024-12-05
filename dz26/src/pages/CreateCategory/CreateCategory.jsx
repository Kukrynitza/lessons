/* eslint-disable no-alert */
import { useActionState, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import z from 'zod'
import styles from './CreateCategory.module.css'

export default function CreateCategory() {
  const stringShema = z.string()
    .min(3, { message: 'The line must contain at least 3 characters' })
    .max(20, { message: 'The line must contain a maximum 20 characters' })
    .refine((value) => !value.includes('-'), { message: 'The line must not contain the " - " symbol, there must be a space(" ") in its place' })
  const [isError, setIsError] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [typing, setTyping] = useState('')
  const navigate = useNavigate()
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    try {
      const name = formData.get('name')
      stringShema.parse(name)
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
      navigate('/categories')
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsTyping(false)
        setIsError(error.errors[0].message)
      } else {
        alert('Ошибка при обновлении категории')
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
