import { useState } from 'react'
import styles from './Funeral.module.css'

export default function Funeral() {
  const [state, setState] = useState()
  function handleButton1Click() {
    setState('Вова Торпеда')
  }
  function handleButton2Click() {
    setState('Леша Донжуан')
  }
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const textName = event.target.elements.text.value
  //   alert(`Привет: ${textName}`)  // }

  return (
    <>
      <button
        className={styles.button}
        onClick={() => handleButton1Click()}>Нажать1
      </button>
      <p>{state}</p>
    </>

  // <>
  //   <form onSubmit={handleSubmit} className='name'>
  //     <label htmlFor="text">Name</label>
  //     <input className={styles.input} id="text" type="text" autoFocus placeholder="Your name"></input>
  //   </form>
  //   <p>Привет: {name} </p>а
  // </>
  )
}
