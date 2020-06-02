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
    signupForm()
}

const renderUser = (user) => {
    // console.log(user)
    const div = document.createElement("div")
    const h3 = document.createElement("h4") 

    div.setAttribute("class", "garage")

    h3.innerText = user.username
    h3.setAttribute('id', user.id)

    div.appendChild(h3)
    mainHTML.appendChild(div)

    user.cars.forEach(car => renderCars(car))
}

const renderCars = (car) => {
    const h3 = document.getElementById(`${car.user_id}`)
    
    const ul = document.createElement("ul")  
    const liMake = document.createElement('li')
    const liModel = document.createElement('li')
    const liYear = document.createElement('li')
    const liTrim = document.createElement('li')
    
    liMake.innerText = `Manufacturer: ${car.make}`
    liModel.innerText = `Model: ${car.model}`
    liYear.innerText = `Year: ${car.year}`
    liTrim.innerText = `Trim: ${car.trim}`
    
    ul.appendChild(liYear)
    ul.appendChild(liMake)
    ul.appendChild(liModel)
    ul.append(liTrim)
    
    h3.appendChild(ul)
    
}

const signupForm = () =>{
    const form = document.querySelector(".add-user")
    form.addEventListener('submit', e => {
        e.preventDefault()
        createUser(e)
        form.reset()
    })
}


const createUser = (e) => {
    console.log(e.target.username.value)
}