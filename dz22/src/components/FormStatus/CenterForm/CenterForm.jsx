import { useFormStatus } from 'react-dom'
import styles from './CenterForm.module.css'
import { useEffect, useRef, useState } from 'react'

export default function CenterForm() {
  const emailRef = useRef(null)
  const { data, pending } = useFormStatus()
  const [check, setCheck] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  useEffect(() => {
    emailRef.current.focus()
  }, [])
  async function registrationSubmit(event) {
    event.preventDefault()
    const email = data.get('email')
    const password = data.get('password')
    const validationErrors = {}

    if (!email.includes('@')) {
      validationErrors.email = 'Email does not contain @'
    }
    if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)

      return
    }

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // 'emilyspass'
        username: 'emilys',
        password
      })
    })
    if (response.ok) {
      // eslint-disable-next-line no-alert
      alert('Congratulations, you are now an astronaut.!!!')
    }
  }
  function getCheck(event) {
    setCheck(event.target.checked)
  }

  return (
    <form onSubmit={registrationSubmit} noValidate className={styles.centerForm}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter your email" ref={emailRef} required />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Create a password" required/>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      <label htmlFor="cosmos">
        <p className={styles.selectP}>What is your experience of flying into space?</p>
      </label>
      <select name="cosmos">
        <option value="Yes">--Your experience--</option>
        <option value="Former astronaut">Former astronaut</option>
        <option value="Intern">Intern</option>
        <option value="No">No experience</option>
      </select>

      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <input type="checkbox" id="checkbox" className={styles.checkbox} checked={check} onChange={getCheck} />
        <span className={styles.checkboxView}>
          {check && (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"></path>
            </svg>
          )}
        </span>
        I agree with <a href="a">Terms and Conditions</a>
      </label>

      <button type="submit" disabled={pending}>Create account</button>

      <p className={styles.pLitle}>
        Already have an account? <a className={styles.aLitle}>Log in</a>
      </p>
    </form>
  )
}
