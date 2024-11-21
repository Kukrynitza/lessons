import { useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext.jsx'
import GetInstruction from './GetInstruction.jsx'
import styles from './Recipes.module.css'

export default function Recipes() {
  const [recipesList, setRecipesList] = useState([])
  const [instructionsList, setInstructionsList] = useState([])
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch('https://dummyjson.com/recipes')
      const { recipes } = await response.json()

      setRecipesList(recipes.map(({ name }) => ({
        title: name
      })))
    }
    getRecipes()
  }, [])
  async function getInstruction(event) {
    event.preventDefault()
    const name = event.target.innerText
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${name}`)
    const { recipes } = await response.json()
    setInstructionsList((instructions) => [
      ...instructions, { name, instructions: recipes[0].instructions }
    ])
  }

  return (
    <ul>
      {recipesList.map(({ title }) => (
        <li key={title} className={styles.column}>
          <button onClick={getInstruction}>{title}</button>
          <CartContext value={{ instructionsList, setInstructionsList, title }}>
            <GetInstruction />
          </CartContext>
        </li>
      ))}
    </ul>

  )
}

// export default function Recipes() {
//     async function getRecipes() {
//       const response = await fetch('https://dummyjson.com/recipes')
//       const { recipes } = await response.json()

//        return recipes.map(({ name }) => ({
//         title: name
//       }))
//     }
//     console.log(getRecipes())
//   return (
//     <ul>
//       {recipesList.map(({ title }) => (
//         <li key={title}>
//           <p>{title}</p>
//           <p></p>
//         </li>
//       ))}
//     </ul>
//   )
// }
