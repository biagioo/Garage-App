class API {
    // const baseUrl =  "http://localhost:3000"
    // const carsUrl = `${baseUrl}/cars`
    // const usersUrl = `${baseUrl}/users`

    static options = {
        headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
        }
    }

    static getUsers(){
        return(
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        )
    }

    static postNewCar(e){
        
        let newCar = { 
            user_id: e.target.users.value, 
            year: e.target.year.value,
            make: e.target.make.value,
            model: e.target.model.value,
            trim: e.target.trim.value
        }

        fetch("http://localhost:3000/cars", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(resp => resp.json())
        .then(carObj => User.renderCar(carObj))
    }
    
    static postNewUser(e){
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
        User.loadUsers()
        // .then(userObj => renderUser(userObj))
    }

    






















}