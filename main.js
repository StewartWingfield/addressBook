let randomUser

window.onload = () => {
    getUser()
}

const getUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(posts => randomUser = posts)
}

const displayUser = () => {
    const allPosts = document.getElementById('all-posts')
    randomUser.map((post, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
      li.appendChild(text)
      allPosts.append(li)
    })
}