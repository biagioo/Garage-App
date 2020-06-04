class User {
   static all = []
   
    constructor(username){
        this.username = username
        User.all.push(this)
        // cars array for each users
    }



}