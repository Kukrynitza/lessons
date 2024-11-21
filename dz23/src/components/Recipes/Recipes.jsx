import { useEffect, useState } from 'react'
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
  function deleteInstruction(title) {
    setInstructionsList(instructionsList.filter((instruction) => instruction.name !== title))
  }
  function getInstructionForP(title) {
    const index = instructionsList.findIndex((instruction) => instruction.name === title)

    if (index === -1) {
      return (<p>Click on recipe</p>)
    }

    return (
      <ul className={styles.instruction} onClick={() => deleteInstruction(title)}>
        {instructionsList[index].instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    )
  }

  return (
    <ul>
      {recipesList.map(({ title }) => (
        <li key={title} className={styles.column}>
          <p onClick={getInstruction}>{title}</p>
          {getInstructionForP(title)}
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
