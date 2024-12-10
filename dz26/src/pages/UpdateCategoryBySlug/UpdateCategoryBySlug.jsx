import { useActionState, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import useSWR from 'swr'
import z from 'zod'
import styles from './UpdateCategoryBySlug.module.css'

const fetcher = async (url) => {
  const response = await fetch(url)

  return response.json()
}
export default function UpdateCategoryBySlug() {
  const stringSchema = z.string()
    .min(3, { message: 'The line must contain at least 3 characters' })
    .max(20, { message: 'The line must contain a maximum 20 characters' })
    .refine((value) => !value.includes('-'), { message: 'The line must not contain the " - " symbol, there must be a space(" ") in its place' })
  const { slug } = useParams()
  const navigate = useNavigate()
  const [typingName, setTypingName] = useState('')
  const [validate, setValidate] = useState(true)
  const [touched, setTouched] = useState(false)
  const [isError, setIsError] = useState('')
  const { data, error, isLoading } = useSWR(`https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`, fetcher)
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const newName = formData.get('newName')
    try {
      stringSchema.parse(newName)
      setValidate(true)
      const newSlug = newName.toLowerCase().replace(' ', '-')
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
      if (err instanceof z.ZodError) {
        console.log(err.errors)
        setValidate(false)
        setTouched(false)
        setIsError(err.errors[0].message)
      } else {
        setTypingName('') // eslint-disable-next-line no-alert
        alert('Ошибка при обновлении категории')
      }
    }
  })
  useEffect(() => {
    if (data) {
      // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setTypingName(data?.name)
    }
  }, [data])
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
      <title>Update Category Page</title>
      <h1 className={styles.h1}>Update category {data.name}</h1>
      <form action={formAction} className={styles.form}>
        {isError && <label htmlFor="newName" className={styles.error}>{isError}</label>}
        <input
          type="text"
          name="newName"
          id="newName"
          className={styles.input}
          style={{
            '--input-color': (typingName && validate) || touched ? '#46A758' : '#E54D2E'
          }}
          value={typingName}
          placeholder="Enter new name"
          onChange={(element) => {
            setTypingName(element.target.value)
            setTouched(true)
            setIsError('')
          }}
        />
        <button
          type="submit"
          className={styles.button}
          style={(typingName && validate) || touched ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !typingName}
        >
          Update
        </button>
      </form>
    </>
  )
}
