car_one = Car.new(year:2003, make: "Mitsubishi", model: "Lancer", trim: "Evolution GSR")
car_two = Car.new(year:1998, make: "Toyota", model: "Supra", trim: "GR")
car_three = Car.new(year:1999, make: "Nissan", model: "Skyline", trim: "GTR")
u = User.create(username: "Future Biagio")

car_one.user = u
car_one.save

car_two.user = u
car_two.save 

car_three.user = u
car_three.save