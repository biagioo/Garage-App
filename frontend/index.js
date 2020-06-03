const baseUrl = "http://localhost:3000"
const carsUrl = `${baseUrl}/cars`
const usersUrl = `${baseUrl}/users`
const mainHTML = document.querySelector('main')
const addCarBtn = document.querySelector('.add-car-btn')

let users = [] 

document.addEventListener("DOMContentLoaded", () => {
    loadUsers()
    signupForm()
    addCarBtn.addEventListener('click', e =>{
        e.preventDefault()
        renderCarForm()
    })

})

const loadUsers = () => {
    fetch(usersUrl) 
    .then(resp => resp.json())
    .then(json => { 
        json.forEach(user => renderUser(user)
        ) 
        users = json
    }
    ) 
}

const renderUser = (user) => {
    // console.log(user)
    const div = document.createElement("div")
    const h3 = document.createElement("h4") 
    
    div.setAttribute("class", "garage")

    h3.innerText = `Username: ${user.username}`
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
    let newUser ={
        username: e.target.username.value
    }

    fetch(usersUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(userObj => renderUser(userObj))
}


const renderCarForm = () =>{
    
    mainHTML.innerHTML = `<form class="new-car">
    <label for="users"> Select the user you'd like to add a car to: </label>
    <select name="users" id="select-users-id">
    ${users.map(user => `<option value=${user.id}> ${user.username} </option>`)}
    </select>
    <br></br>
    <label for="year">Year: </label>
    <input type="text" id="year" name="year"></input>
    <br></br>
    <label for="make">Make: </label>
    <input type="text" id="make" name="make"></input>
    <br></br>
    <label for="model">Model: </label>
    <input type="text" id="model" name="model"></input>
    <br></br>
    <label for="trim">Trim: </label>
    <input type="text" id="trim" name="trim"></input>
    <br></br>
    <input type="submit" name="submit" value="Add New Car" class="submit">
  </form>`

    const newCarForm = document.querySelector('.new-car')
    newCarForm.addEventListener('submit', e =>{
        e.preventDefault()
        createNewCar(e)
        // console.log(e.target.users.value)
        // console.log(e.target.year.value)
        // console.log(e.target.make.value)
        // console.log(e.target.model.value)
        // console.log(e.target.trim.value)
    })
   
   
    // newCarForm.querySelector('button').addEventListener('click', event => {
    //     event.preventDefault()
    //     let form = event.target.parentElement
    //     let formInputs = form.querySelectorAll('input')
    //     console.log(formInputs)
    //     console.log(form)
    // })
}


const createNewCar = e =>{
    let newCar = { 
        user_id: e.target.users.value, 
        year: e.target.year.value,
        make: e.target.make.value,
        model: e.target.model.value,
        trim: e.target.trim.value
    }

    fetch(carsUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
    .then(resp => resp.json())
    .then(carObj => renderCar(carObj))
}

const renderCar = car =>{
    mainHTML.innerHTML = ''
    console.log(car.user.username)
    const header = document.createElement("h3")
    header.setAttribute('id', `${car.user_id}`) 
    header.innerText = car.user.username
    mainHTML.appendChild(header)
    
    renderCars(car)
    
}

