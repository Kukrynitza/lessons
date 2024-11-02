async function createUser(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const userPassword = event.target.querySelector('#password').value
  if (email.length < 3) {
    document.querySelector('.login').appendChild('<p class="error">Error email length < 3</p>')

    return
  }
  if (userPassword.length < 6) {
    document.querySelector('.login').appendChild('Error: password length must be at least 6 characters')

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
userSubmit.addEventListener('submit', createUser)
