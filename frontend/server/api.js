class API {
    static options = {
        headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
        }
    }

    static getUsers(){
        return(
        fetch(usersUrl) 
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

        fetch(carsUrl, {
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
        .then(data =>{
            mainHTML.innerHTML = ''
            User.loadUsers()
            alert(data.message)
        })
    }

    static loadUserGarage(id){
        mainHTML.innerHTML= ''
        fetch(`${usersUrl}/${+id}`) 
        .then(resp => resp.json())
        .then(user => {
            let newUser = User.all.find(userObj => userObj.id == user.id)
            newUser.renderGarage()
        }) 

    }
    

    static deleteCar(id){
        fetch(carsUrl + `/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then((data) => alert(data.message))
        
    }

    static deleteUser(id){
        fetch(`${usersUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then((data) => {
            alert(data.message)
            fakePageReload()
        })
    }


















}