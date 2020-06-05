const baseUrl = "http://localhost:3000"
const carsUrl = `${baseUrl}/cars`
const usersUrl = `${baseUrl}/users`
const mainHTML = document.querySelector('main')
const btnsDiv = document.getElementById("buttons")
const allGaragesBtn = document.getElementById("all-garages-btn")
const bodyHeaderH2 = document.querySelector('h2') 

document.addEventListener("DOMContentLoaded", () => {
     allGaragesBtn.addEventListener('click', e =>{
        e.preventDefault()
        mainHTML.innerHTML = ''
    //    debugger
        bodyHeaderH2.innerText = 'Here are All Current Garages'
        User.loadUsers()
        // debugger
        createNewCarBtn()
        // getUsers()
        createNewUserForm()
        
    })
  
    
})

const createNewCarBtn = () =>{
    const newCarBtn = document.createElement('button')
    const findAddCarBtn = document.getElementById("add-car-btn")
    
    if(!(findAddCarBtn)) {
    newCarBtn.setAttribute("id", "add-car-btn")
    newCarBtn.innerText = "Add Car"
    newCarBtn.addEventListener('click', e =>{
            e.preventDefault()
            User.renderCarForm()
        })
    btnsDiv.appendChild(newCarBtn)
    } 

}

// const getUsers = () => {
//     fetch(usersUrl) 
//     .then(resp => resp.json())
//     .then(json => { 
//         json.forEach(user => renderUser(user)
//         ) 
//         // users = json
//         createNewUserForm()
//     }
//     ) 
// }

const createNewUserForm = () => {
    const div = document.getElementById('new-user-form')
    div.innerHTML = `<form id="signup-form" class="add-user" action="index.html" method="post">
    <h3>Sign to Create Your garage:</h3>
    <input id="signup-field" type="text" name="username" value="" placeholder="username">
    <br><br>
    <input type="submit" name="submit" value="Submit" class="submit">
    <br><br>
    </form>`
    const form = document.querySelector(".add-user")
    form.addEventListener('submit', e => {
        e.preventDefault()
        API.postNewUser(e)
        form.reset()
    })
}

// const renderUser = (user) => {

//     const div = document.createElement("div")
//     const h3 = document.createElement("h3") 
//     const garageBtn = document.createElement('button')

//     garageBtn.innerText = 'View My Garage'
//     garageBtn.setAttribute('value', `${user.id}`)
//     garageBtn.addEventListener('click', e=> {
//         e.preventDefault()
//         loadGarage(e)
//     })
    
//     div.setAttribute("class", "garage")

//     h3.innerText = `${user.username}'s Garage`
//     h3.setAttribute('id', user.id)

    
//     div.appendChild(h3)
//     div.appendChild(garageBtn)
//     mainHTML.appendChild(div)

//     user.cars.forEach(car => renderCars(car))
// }

// const loadGarage = e =>{
//     fetch(`${usersUrl}/${e.target.value}`) 
//     .then(resp => resp.json())
//     .then(userObj => {
//         renderGarage(userObj)
//     }) 
// }

const renderGarage = userObj => {
    mainHTML.innerHTML =''

    const h3 = document.createElement('h3')
    h3.setAttribute('id', userObj.id)
    h3.innerText = `${userObj.username}'s Garage`

    mainHTML.appendChild(h3)
    
    userObj.cars.map(car => {
      let dltBtn = document.createElement('button')
      dltBtn.innerText = "Delete Car"
      dltBtn.setAttribute('value', `${car.id}`)  
      dltBtn.addEventListener('click', e => {
        e.preventDefault()
        deleteCar(e.target.value)    
      })
      h3.appendChild(dltBtn)

      renderCars(car)
    })
}

const deleteCar = id =>{
    fetch(carsUrl + `/${id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then((data) => {
        if (!data.errors){
            renderGarage(data)
            window.alert("Car Removal Successful")

        }else{
            throw new Error(`${data.errors}`)
        }
    }
)}

// const renderCars = (car) => {
//     const h3 = document.getElementById(`${car.user_id}`)
    
//     const ul = document.createElement("ul")  
//     const liMake = document.createElement('li')
//     const liModel = document.createElement('li')
//     const liYear = document.createElement('li')
//     const liTrim = document.createElement('li')
    
//     ul.setAttribute('id', car.id)
//     liMake.innerText = `Manufacturer: ${car.make}`
//     liModel.innerText = `Model: ${car.model}`
//     liYear.innerText = `Year: ${car.year}`
//     liTrim.innerText = `Trim: ${car.trim}`
    
//     ul.appendChild(liYear)
//     ul.appendChild(liMake)
//     ul.appendChild(liModel)
//     ul.append(liTrim)
    
//     h3.appendChild(ul)
    
// }


// const createUser = (e) => {
//     let newUser ={
//         username: e.target.username.value
//     }

//     fetch(usersUrl, {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//     })
//     .then(resp => resp.json())
//     .then(userObj => renderUser(userObj))
// }



// const renderCarForm = () =>{
//     let users = [] 

//     fetch(usersUrl) 
//     .then(resp => resp.json())
//     .then(json => json.forEach(user =>{
//         users.push(user)
//     }) ) 

//     const newUserForm = document.getElementById('new-user-form')
//     newUserForm.innerHTML = ""
    
//     const h2 = document.querySelector('h2')
//     h2.innerText = "Please Fill in the Form Below!"

//     mainHTML.innerHTML = `<form id="new-car">
//     <label for="users"> Select the user you'd like to add a car to: </label>
//     <select name="users" id="select-users-id">
//     ${users.map(user => `<option value=${user.id}> ${user.username} </option>`)}
//     </select>
//     <br></br>
//     <label for="year">Year: </label>
//     <input type="text" id="year" name="year"></input>
//     <br></br>
//     <label for="make">Make: </label>
//     <input type="text" id="make" name="make"></input>
//     <br></br>
//     <label for="model">Model: </label>
//     <input type="text" id="model" name="model"></input>
//     <br></br>
//     <label for="trim">Trim: </label>
//     <input type="text" id="trim" name="trim"></input>
//     <br></br>
//     <input type="submit" name="submit" value="Add New Car" class="submit">
//   </form>`

//     const newCarForm = document.getElementById('new-car')
//     newCarForm.addEventListener('submit', e =>{
//         e.preventDefault()
//         createNewCar(e)
//     })
// }


// const createNewCar = e =>{
//     let newCar = { 
//         user_id: e.target.users.value, 
//         year: e.target.year.value,
//         make: e.target.make.value,
//         model: e.target.model.value,
//         trim: e.target.trim.value
//     }

//     fetch(carsUrl, {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCar)
//     })
//     .then(resp => resp.json())
//     .then(carObj => renderCar(carObj))
// }

// const renderCar = car =>{
//     const newCarForm = document.getElementById("new-car")
//     newCarForm.innerHTML = ''
   
//     const h3 = document.createElement("h3")
   
//     h3.setAttribute('id', `${car.user_id}`) 
//     h3.innerHTML = `Username: ${car.user.username}`
   
//     mainHTML.appendChild(h3)
    
   
//    renderCars(car)
//    const h2 = document.querySelector('h2')
//    h2.innerText = "Here is the car you just added"
// }

