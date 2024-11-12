import styles from './Greeting.module.css'
const name = 'Oleg'

export default function Greeting(){
  function handleSubmit(event){
    event.preventDefault()
    const textName = event.target.elements.text.value
    alert(`Привет: ${textName}`)
  }
  return (
    <>
  <form onSubmit={handleSubmit} className='name'>
  <label htmlFor="text">Name</label>
  <input className={styles.input} id="text" type="text" autoFocus placeholder="Your name"></input>
  </form>
  <p>Привет: {name} </p>
  </>
  )
}