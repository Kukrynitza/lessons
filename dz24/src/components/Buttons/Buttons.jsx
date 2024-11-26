import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from '../Modal/Modal.jsx'
import styles from './Buttons.module.css'

export default function Buttons() {
  const [on, setOn] = useState((false))
  const [onPortal, setOnPortal] = useState((false))
  function withoutPortal() {
    setOn((off) => !off)
  }
  function portal() {
    setOnPortal((off) => !off)
  }

  return (
    <>
      <div className={styles.div}>
        <button className={styles.withoutPortal} onClick={withoutPortal}>Без портала </button>
        <button className={styles.portal} onClick={portal}>Через портал</button>
      </div>
      {on && <Modal on={on} setOn={setOn}/>}
      {onPortal && createPortal(<Modal on={onPortal} setOn={setOnPortal}/>, document.body)}
    </>
  )
}
