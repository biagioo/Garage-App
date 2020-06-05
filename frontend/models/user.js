class User {
   static all = []
   
    constructor(user){
        this.username = user.username
        this.id = user.id
        this.cars = user.cars // cars array for each user
        User.all.push(this)
    }

    static renderUsers(){
        User.all.forEach(user =>{
        const div = document.createElement("div")
        const h3 = document.createElement("h3") 
        const garageBtn = document.createElement('button')

        garageBtn.innerText = 'View My Garage'
        garageBtn.setAttribute('value', `${user.id}`)
        garageBtn.addEventListener('click', e=> {
            e.preventDefault()
            loadGarage(e)
        })
        
        div.setAttribute("class", "garage")

        h3.innerText = `${user.username}'s Garage`
        h3.setAttribute('id', user.id)

        
        div.appendChild(h3)
        div.appendChild(garageBtn)
        mainHTML.appendChild(div)

        user.renderCars()
        })
    }

    renderCars(){
        this.cars.forEach(car =>{

            const h3 = document.getElementById(`${car.user_id}`)
            
            const ul = document.createElement("ul")  
            const liMake = document.createElement('li')
            const liModel = document.createElement('li')
            const liYear = document.createElement('li')
            const liTrim = document.createElement('li')
            
            ul.setAttribute('id', car.id)
            liMake.innerText = `Manufacturer: ${car.make}`
            liModel.innerText = `Model: ${car.model}`
            liYear.innerText = `Year: ${car.year}`
            liTrim.innerText = `Trim: ${car.trim}`
            
            ul.appendChild(liYear)
            ul.appendChild(liMake)
            ul.appendChild(liModel)
            ul.append(liTrim)
            
            h3.appendChild(ul)

        } )


        
    }

    static loadUsers(){
        API.getUsers() 
        .then(users =>{
            users.forEach(user => new User(user))
            User.renderUsers()
        }) 
    }


}

