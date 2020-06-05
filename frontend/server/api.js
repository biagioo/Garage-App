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
        // debugger
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
    


    






















}