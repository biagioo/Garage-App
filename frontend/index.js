const baseUrl = "http://localhost:3000"
const carsUrl = `${baseUrl}/cars`
const usersUrl = `${baseUrl}/users`
const mainHTML = document.querySelector('main')

document.addEventListener("DOMContentLoaded", () => loadUsers())

const loadUsers = () => {
    fetch(usersUrl) 
    .then(resp => resp.json())
    .then(json => { 
        json.forEach(user => renderUser(user)
    )}) 
}

const renderUser = (user) => {
    console.log(user)
}
