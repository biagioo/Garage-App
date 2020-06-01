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
    // console.log(user)
    const div = document.createElement("div")
    const h3 = document.createElement("h4")
    const ul = document.createElement("ul")  

    div.setAttribute("class", "garage")

    h3.innerText = user.username

    ul.setAttribute("id", user.id)

    div.appendChild(h3)
    div.appendChild(ul)

    mainHTML.appendChild(div)


    user.cars.forEach(car => renderCars(car))
}

const renderCars = (car) => {
    const ul = document.getElementById(`${car.user_id}`)
    console.log(car.year)
    const liMake = document.createElement('li')
    const liModel = document.createElement('li')
    const liYear = document.createElement('li')
    const liTrim = document.createElement('li')
    
    liMake.innerText = `${car.make}`
    liModel.innerText = `${car.model}`
    liYear.innerText = `${car.year}`
    liTrim.innerText = `${car.trim}`
    
    ul.appendChild(liYear)
    ul.appendChild(liMake)
    ul.appendChild(liModel)
    ul.append(liTrim)

    
}
