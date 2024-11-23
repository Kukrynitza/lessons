import { useState } from 'react'
import styles from './Modal.module.css'

export default function Modal({ on, setOn }) {
  function check() {
    setOn((off) => !off)
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
