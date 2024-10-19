async function getUserInfoFromSecondSite(userId1, userId2) {
  try {
    const [responseUserId1, responseUserId2] = await Promise.all(
      [
        fetch(`https://dummyjson.com/users/${userId1}`),
        fetch(`https://dummyjson.com/users/${userId2}`)
      ]
    )
    const dataUserId1 = await responseUserId1.json()
    const dataUserId2 = await responseUserId2.json()
    return [dataUserId1, dataUserId2]
  } catch (error) {
    console.log('Error in second site')
    return 'ERROR'
  }
}

async function getUserInfoFromFirstSite() {
  try {
    const [responseUserId1, responseUserId2] = await Promise.all(
      [
        fetch('https://dummyjson.com/posts/1'),
        fetch('https://dummyjson.com/posts/2')
      ]
    )
    const userId1 = await responseUserId1.json()
    const userId2 = await responseUserId2.json()
    const data = await getUserInfoFromSecondSite(userId1.userId, userId2.userId)
    if (data === 'ERROR') {
      throw new Error('Error in second')
    }
    const resultData = [{ ...data[0], ...userId1 }, { ...data[1], ...userId2 }]
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

getUserInfoFromFirstSite().then((date) => console.log(date))
