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
        fakePageReload() 
    })
})

const fakePageReload =() =>{
    mainHTML.innerHTML = ''
    bodyHeaderH2.innerText = 'Here are All Current Garages'
    User.loadUsers()
    createNewCarBtn()
    createNewUserForm()
}

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


