import delay from 'delay'
import { useContext, useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './Recipes.module.css'

export default function GetInstruction({ title }) {
  const fetcher = async (get) => {
    await delay(2000)
    const response = await fetch(get)

    return response.json()
  }
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/recipes/search?q=${title}`, fetcher)
  if (error) {
    return (<p>failed to load</p>)
  }
  if (isLoading) {
    return (<p className={styles.loader}>loading
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle fill="#24344A" stroke="#24344A" strokeWidth="15" r="15" cx="40" cy="100">
          <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#24344A" stroke="#24344A" strokeWidth="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#24344A" stroke="#24344A" strokeWidth="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0">
        </animate>
        </circle>
      </svg>
    </p>)
  }
  if (!data.recipes[0]) {
    return (<p >not fount</p>)
  }

  return (
    <ul className={styles.ul}>
      {data.recipes[0]?.instructions.map((oneInstruction, index) => (
        <li key={index}>{oneInstruction}</li>
      ))}
    </ul>
  )
}

// import { useContext, useEffect, useState } from 'react'
// import useSWR from 'swr'
// import styles from './Recipes.module.css'

// export default function GetInstruction({ title }) {
//   const [instruction, setInstruction] = useState(null)
//   const fetcher = async (get) => {
//     const response = await fetch(get)

//     return response.json()
//   }
//   const { data, error, isLoading } = useSWR(`https://dummyjson.com/recipes/search?q=${title}`, fetcher)
//   if (error) {
//     return (<div>failed to load</div>)
//   }
//   if (isLoading) {
//     return (<div>loading...</div>)
//   }
//   setInstruction(data)

//   return (
//     <ul>
//       {data.recipes[0]?.instructions.map((oneInstruction, index) => (
//         <li key={index}>{oneInstruction}</li>
//       ))}
//     </ul>
//   )
// }
