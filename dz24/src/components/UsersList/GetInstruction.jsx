import { useEffect, useState } from 'react'

export default function GetInstruction({ user }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function get() {
      const response = await fetch(`https://dummyjson.com/users/${user.id}`)
      const result = await response.json()
      setData({
        address: result.address.address,
        city: result.address.city,
        state: result.address.state
      })
    }
    get()
  }, [user.id])
  console.log(data)
  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <li key={data.city}>
      <p>{data.address}</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
    </li>
  )
}
