import { useParams } from 'react-router'

export default function Category() {
  const { slug } = useParams()

  return (
    <>
      <title>{slug}</title>
      <h1>category page - {slug}</h1>
    </>
  )
}
