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
      let userDetails = document.createElement('h4')
      userDetails.className='hide'
        userDetails.textContent = `Cell: ${user.cell} DOB: ${Object.entries(user.dob)} Email: ${user.email}, Gender: ${user.gender}, ID: ${Object.entries(user.id)}, Location: ${user.location.city}, ${user.location.country} Login: ${Object.entries(user.login)}, NAT: ${user.nat}, Phone: ${user.phone}, Registered: ${Object.entries(user.registered)}, Phone: ${user.phone}`
        
        li.appendChild(userDetails)


      const btn = document.createElement('button')
      btn.innerHTML = "Show rest of info"
      btn.addEventListener('click', function(){
        userDetails.classList.toggle('hide')
      })
      li.appendChild(btn)
        
        
    })
}
    
    

