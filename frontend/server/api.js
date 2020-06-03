class Api {
    static baseUrl =  "http://localhost:3000"
    static carsUrl = `${baseUrl}/cars`
    static usersUrl = `${baseUrl}/users`

    static options = {
        headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
        }
    }

    static getCars(){
        return(
        fetch(carsUrl)
        .then(resp => resp.json())
        )
    }

    static getUsers(){
        return(
        fetch(usersUrl)
        .then(resp => resp.json())
        )
    }


    






















}