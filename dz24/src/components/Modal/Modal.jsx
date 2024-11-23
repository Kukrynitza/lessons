import { useState } from 'react'
import styles from './Modal.module.css'

export default function Modal() {
  const [off, setOff] = useState(false)
  function check() {
    setOff((on) => !on)
  }
  if (off) {
    return null
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={check}>✖</button>
        <p>Открылось модальное окно</p>
      </div>
    </div>
  )
}
