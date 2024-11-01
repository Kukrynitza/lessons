async function createUser(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const userPassword = event.target.querySelector('#password').value
  if (email.length < 3) {
    document.querySelector('.login').innerHTML = `
    <label for="email">Email</label>
    <div>
    <input id="email" name="email" placeholder="Enter your email" required autocomplete autofocus>
    <p class="error">Error email length < 3</p>
    </div>
    <label for="password">Password</label>
    <input id="password" name="password" placeholder="Create a password" required autocomplete>`

    return
  }
  if (userPassword.length < 6) {
    document.querySelector('.login').innerHTML = `
      <label for="email">Email</label>
      <input id="email" name="email" placeholder="Enter your email" required autocomplete autofocus>
      <label for="password">Password</label>
      <div>
        <input id="password" name="password" placeholder="Create a password" required autocomplete>
        <p class="error">Error: password length must be at least 6 characters</p>
      </div>
    `

    return
  }
  document.querySelector('.login').innerHTML = '<label for="email">Email</label><input id="email" name="email" placeholder="Enter your email" required autocomplete autofocus><label for="password">Password</label><input id="password" name="password" placeholder="Create a password" required autocomplete></input>'
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
