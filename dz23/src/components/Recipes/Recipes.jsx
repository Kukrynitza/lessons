import { useEffect, useState } from 'react'
import GetInstruction from './GetInstruction.jsx'
import styles from './Recipes.module.css'

export default function Recipes() {
  const [recipesList, setRecipesList] = useState([])
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch('https://dummyjson.com/recipes')
      const { recipes } = await response.json()

      setRecipesList(recipes.map(({ name }) => ({
        title: name,
        on: false
      })))
    }
    getRecipes()
  }, [])
  function handleClick(title) {
    setRecipesList((recipes) => recipes.map((recipe) => (recipe.title === title
      ? { ...recipe, on: !recipe.on }
      : recipe)))
  }

  return (
    <ul>
      {recipesList.map(({ on, title }) => (
        <li key={title} className={styles.column}>
          <button onClick={() => handleClick(title)}>{title}</button>
          {on ? <GetInstruction title = {title}/> : <p>Click on user</p>}
        </li>
      ))}
    </ul>

  )
}
