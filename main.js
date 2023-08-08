let randomUser

window.onload = () => {
    getUser()
}

const getUser = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(users => {
        randomUser = users.results
        console.log(users.results)
        displayUser()
    })
}

const displayUser = () => {
    const allUsers = document.getElementById('all-users')
    randomUser.map((user, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`${user.name.first} ${user.name.last}`)
      const image = document.createElement('img')
      image.src = user.picture.thumbnail
      li.appendChild(text)
      li.appendChild(image)
      allUsers.append(li)


      const button = document.create
    })
}