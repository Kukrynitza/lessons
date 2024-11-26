import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext.jsx'
import styles from './UsersList.module.css'

export default function UserInformation() {
  const { setUserData, user, userData } = useContext(CartContext)
  function deleteInstruction() {
    setUserData(userData.filter((instruction) => instruction.id !== user.id))
  }
  const index = userData.findIndex((instruction) => instruction.id === user.id)
  if (index === -1) {
    return (<p>Click on recipe</p>)
  }

  return (
    <ul onClick={() => deleteInstruction()}>
      <li key={userData[index].city}>
        <p>{userData[index].address}</p>
        <p>{userData[index].city}</p>
        <p>{userData[index].state}</p>
      </li>
    </ul>
  )
}
