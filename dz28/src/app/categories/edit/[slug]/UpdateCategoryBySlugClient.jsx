'use client'
import { useActionState, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'path-to-regexp'
import useSWR from 'swr'
import { parse } from 'valibot'
import fetcher from '../../../../_sourses/fetcher.js'
import stringShema from '../../../../_sourses/stringShema.js'
import styles from './UpdateCategoryBySlug.module.css'

export default function UpdateCategoryBySlug() {
  const router = useRouter()
  const path = usePathname()
  const matcher = match('/categories/edit/:slug')
  const predSlug = matcher(path)
  const { slug } = predSlug.params
  const [touched, setTouched] = useState(false)
  const [isError, setIsError] = useState('')
  const { data, error, isLoading } = useSWR(`https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`, fetcher)
  const [message, formAction, isPending] = useActionState(async (_, formData) => {
    const newName = formData.get('newName')
    try {
      parse(stringShema, newName)
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
      router.push('/categories')
    } catch (err) {
      setTouched(false)
      console.error(err)
      setIsError(err.message)
    }

    return formData.get('newName')
  }, data?.name)
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
      <h1 className={styles.h1}>Update category {data.name}</h1>
      <form action={formAction} className={styles.form}>
        {isError && <label htmlFor="newName" className={styles.error}>{isError}</label>}
        <input
          type="text"
          name="newName"
          id="newName"
          className={styles.input}
          style={{
            '--input-color': touched ? '#46A758' : '#E54D2E'
          }}
          defaultValue={data.name}
          placeholder="Enter new name"
          onChange={(element) => {
            setTouched(true)
            setIsError('')
          }}
        />
        <button
          type="submit"
          className={styles.button}
          style={touched ? { backgroundColor: '#46A758' } : { backgroundColor: '#E54D2E' }}
          disabled={isPending || !touched}
        >
          Update
        </button>
      </form>
    </>
  )
}
