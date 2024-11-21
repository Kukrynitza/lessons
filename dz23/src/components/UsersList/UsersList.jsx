import { useEffect, useState } from 'react'
import GetInstruction from './GetInstruction.jsx'
import styles from './UsersList.module.css'

export default function UsersList() {
  const [usersList, setUsersList] = useState([])
  const [userData, setUserData] = useState([])
  useEffect(() => {
    async function getUserFromJson() {
      const response = await fetch('https://dummyjson.com/users')
      const { users } = await response.json()

      setUsersList(users.map((user) => ({
        firstName: user.firstName,
        id: user.id,
        lastName: user.lastName,
        maidenName: user.maidenName,
        on: false
      })))
    }
    getUserFromJson()
  }, [])
  function handleGetInstruction(userId) {
    setUsersList((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, on: !user.on } : user)))
  }

  return (
    <ul className={styles.mainUl}>
      {usersList.map((user) => (
        <div className={styles.div} key={user.id}>
          <button className={styles.user} onClick={() => handleGetInstruction(user.id)}>
            <p className={styles.userP}> {user.firstName}</p>
            <p className={styles.userP}> {user.lastName}</p>
            <p className={styles.userP}> {user.maidenName}</p>
          </button>
          <ul>
            {user.on ? <GetInstruction user = {user}/> : <p>Click on user</p>}
          </ul>
        </div>
      ))}
      {/* { createPortal(
        <li>Наутилус Пампилиус</li>,
        document.body
      )} */}
    </ul>
  )
}
