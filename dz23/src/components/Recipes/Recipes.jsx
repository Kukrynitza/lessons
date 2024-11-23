import classNames from 'classnames'
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
    <ul className={styles.mainUl}>
      {recipesList.map(({ on, title }) => (
        <li key={title} className={on
          ? classNames(styles.column, styles.columnOn)
          : classNames(styles.column, styles.columnOff)}>
          <button className={on
            ? classNames(styles.recipe, styles.onRecipe)
            : classNames(styles.recipe, styles.offRecipe)}
          onClick={() => handleClick(title)}>{title}</button>
          {on ? <GetInstruction title = {title}/> : <p>Click on user</p>}
        </li>
      ))}
    </ul>

  )
}
