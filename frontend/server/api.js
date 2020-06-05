class API {
    // static baseUrl =  "http://localhost:3000"
    // static carsUrl = `${baseUrl}/cars`
    // static usersUrl = `${baseUrl}/users`

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


    






















}