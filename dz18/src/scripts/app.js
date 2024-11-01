async function createUser(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const userPassword = event.target.querySelector('#password').value
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
  window.localStorage.setItem('refreshToken', refreshToken)
}

const userSubmit = document.querySelector('.center-form')
userSubmit.addEventListener('submit', createUser)
