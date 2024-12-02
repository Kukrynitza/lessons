import { useActionState, useState } from 'react'
import { Link } from 'react-router'
import styles from './UpdateCategoryByID.module.css'

export default function CreateCategory() {
  const [typing, setTyping] = useState('')
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const name = formData.get('name')
    const slug = name.toLowerCase()
    console.log(name, slug)
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
  })

  return (
    <>
      <title>UpdateCategoryByID</title>
      <h1 className={styles.h1}>Update category by ID</h1>
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
          disabled={isPending}
        >
          Update
        </button>
      </form>
    </>
  )
}
