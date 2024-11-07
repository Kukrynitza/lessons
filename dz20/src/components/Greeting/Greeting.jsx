import styles from './Greeting.module.css'
const name = 'Oleg'
function handleSubmit(event){
  event.preventDefault()
  const textName = event.target.elements.text.value
  alert(`Привет: ${textName}`)
}

export default function Greeting(){
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