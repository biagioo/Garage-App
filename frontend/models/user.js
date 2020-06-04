class User {
   static all = []
   
    constructor(id, username, cars){
        this.username = username
        this.id = id
        this.cars = cars // cars array for each users
        User.all.push(this)
    }

    


}