async function checkUser(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const userPassword = event.target.querySelector('#password').value
  const error = document.createElement('p')
  error.className = 'error'
  const oldError = document.querySelector('.error')
  if (oldError) {
    oldError.remove()
  }
  if (email.length < 3) {
    error.textContent = 'Error email length < 3'
    setTimeout(() => {
      document.querySelector('.login .email').appendChild(error)
    }, 100)

    return
  }
  if (userPassword.length < 6) {
    error.textContent = 'Error: password length must be at least 6 characters'
    setTimeout(() => {
      document.querySelector('.login .password').appendChild(error)
    }, 100)

    return
  }
  console.log(email, userPassword)
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username: email,
      password: userPassword
    })
  })
  const { refreshToken } = await response.json()
  console.log(refreshToken)
  localStorage.setItem('refreshToken', refreshToken)
}

const userSubmit = document.querySelector('.center-form')
userSubmit.addEventListener('submit', checkUser)
