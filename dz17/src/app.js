// async function getUsers() {
//   const responseUsers = await fetch('https://dummyjson.com/users')
//   const responseUser = await fetch('https://dummyjson.com/users/add', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       firstName: 'Vlad'
//     })

//   })
//   const dataUsers = await responseUsers.json()
//   const dataUser = await responseUser.json()
//   dataUsers.users.push(dataUser)

//   return dataUsers
// }

// async function main() {
//   console.log(await getUsers())
// }
// main()

async function addUser(event) {
  event.preventDefault()
  const text = document.querySelector('input').value
  const response = await fetch(`https://dummyjson.com/users/${text}`)
  const data = await response.json()
  window.localStorage.setItem(text, JSON.stringify(data))
  console.log(data)
}

const button = document.querySelector('button')
button.addEventListener('click', addUser)
