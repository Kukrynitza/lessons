import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext.jsx'
import styles from './Recipes.module.css'

export default function GetInstruction() {
  const { instructionsList, setInstructionsList, title } = useContext(CartContext)
  function deleteInstruction() {
    setInstructionsList(instructionsList.filter((instruction) => instruction.name !== title))
  }
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
