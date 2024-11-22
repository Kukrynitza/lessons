import { useContext, useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './Recipes.module.css'

export default function GetInstruction({ title }) {
  const fetcher = async (get) => {
    const response = await fetch(get)

    return response.json()
  }
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/recipes/search?q=${title}`, fetcher)
  if (error) {
    return (<div>failed to load</div>)
  }
  if (isLoading) {
    return (<div>loading...</div>)
  }

  return (
    <ul>
      {data.recipes[0]?.instructions.map((oneInstruction, index) => (
        <li key={index}>{oneInstruction}</li>
      ))}
    </ul>
  )
}

// import { useContext, useEffect, useState } from 'react'
// import useSWR from 'swr'
// import styles from './Recipes.module.css'

// export default function GetInstruction(title) {
//   const fetcher = async (url) => {
//     const response = await fetch(url)

//     return response.json()
//   }
//   const [instruction, setInstruction] = useState(null)
//   const { data, error, isLoading } = useSWR(https://dummyjson.com/recipes/search?q=${title}, fetcher)
//   if (error) {
//     return (<div>failed to load</div>)
//   }
//   if (isLoading) {
//     return (<div>loading...</div>)
//   }
//   setInstruction(data.instructions)
//   console.log(isLoading)

//   return (
//     <ul>
//       {instruction.map((oneInstruction) => (
//         <li key={oneInstruction}>{oneInstruction}</li>
//       ))}
//     </ul>
//   )
// }
