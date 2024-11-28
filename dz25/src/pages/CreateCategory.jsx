import { useActionState } from 'react'
import { useNavigate } from 'react-router'

export default function CreateCategory() {
  const navigate = useNavigate()
  const [, submitAction, isPending] = useActionState(
    () => {
      // eslint-disable-next-line no-console
      console.log('form is submitting, time to do a fetch call')

      navigate('/categories')
    },
    null
  )

  return (
    <>
      <title>Create a new category</title>
      <h1>Create a new category</h1>
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
        </div>
        <button type="submit" disabled={isPending}>Create category</button>
      </form>
    </>
  )
}
