import { useActionState, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import styles from './CreateCategory.module.css'

export default function CreateCategory() {
  const [typing, setTyping] = useState('')
  const navigate = useNavigate()
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const name = formData.get('name')
    const slug = name.toLowerCase()
    await fetch(
      'https://happy-store.vercel.app/api/categories',
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
  })

  return (
    <>
      <title>CreateCategory</title>
      <h1 className={styles.h1}>Create new name</h1>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          name="name"
          className={styles.input}
          style={{
            border: `5px solid ${typing ? '#46A758' : '#E54D2E'}`
          }}
          value={typing}
          placeholder="Enter name"
          onChange={(element) => setTyping(element.target.value)}
        />
        <button
          type="submit"
          className={styles.button}
          style={typing ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !typing}
        >
          Create
        </button>
      </form>
    </>
  )
}