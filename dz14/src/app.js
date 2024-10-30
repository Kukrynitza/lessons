async function fetchUserById(userId1) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId1}`)
    return response.json()
  } catch (error) {
    console.log('Error in second site')
    return 'ERROR'
  }
}

async function getListState() {
  try {
    const [responseUserId1, responseUserId2] = await Promise.all(
      [
        fetch('https://dummyjson.com/posts/1'),
        fetch('https://dummyjson.com/posts/2')
      ]
    )
    const users = await Promise.all([
      responseUserId1.json(),
      responseUserId2.json()
    ])
    const data = await Promise.all(users.map((post) => fetchUserById(post.userId)))
    if (data === 'ERROR') {
      throw new Error('Error in second')
    }
    const resultData = users.map((user, index) => ({ ...user, ...data[index] }))
    const result = resultData.map((user) => ({
      id: user.id,
      title: user.title,
      user: {
        id: user.userId,
        fullname: `${user.firstName} ${user.lastName}`
      }
    }))

    return result
  } catch (error) {
    console.log('Error in first site')
    return 'ERROR'
  }
}

async function main() {
  console.log(await getListState())
}

main()
