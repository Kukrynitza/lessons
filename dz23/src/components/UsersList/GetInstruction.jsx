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
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#4E9173" strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
  }

  return (
    <li key={data.city}>
      <p>{data.address}</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
    </li>
  )
}
