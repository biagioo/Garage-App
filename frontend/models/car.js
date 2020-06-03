class Car{
    static all = []

    constructor(id, year, make, model, trim, user_id, user){
        this.id = id
        this.year = year
        this.make = make
        this.model = model
        this.trim = trim 
        this.user_id = user_id
        this.user = user
        User.all.push(this)
    }



}