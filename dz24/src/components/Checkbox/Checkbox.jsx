import { useState } from 'react'
import styles from './Checkbox.module.css'

export default function Checkbox() {
  const [checked, setCheck] = useState(false)
  function check() {
    setCheck(!checked)
  }

  return (
    <input checked={checked} className={styles.checkbox} id='check' type="checkbox" onChange={check} />
  )
}
