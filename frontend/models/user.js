class User {
   static all = []
   
    constructor(username){
        this.username = username
        User.all.push(this)
    }



}