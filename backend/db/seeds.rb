# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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