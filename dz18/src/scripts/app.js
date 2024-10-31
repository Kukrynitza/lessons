function createUser(event) {
  event.preventDefault()
  console.log(event.target)
}

const userSubmit = document.querySelectorAll('.user')
userSubmit.addEventListener('submit', createUser)
