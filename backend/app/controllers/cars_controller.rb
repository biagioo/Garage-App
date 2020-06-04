class CarsController < ApplicationController

    def index
        cars = Car.all
        render json: cars 
    end

    def show
        car = Car.find_by(id: params[:id])
        render json: car
    end

    def create
        user = User.find_by(id: car_params[:user_id])
        if user
            new_car = user.cars.new(car_params)
            new_car.save
            render json: new_car
            
        else 
            render json: {errors: user.errors.full_messages}
        end
    end

    def destroy
        car = Car.find_by(id: params[:id])
        car.destroy
    end

    private

    def car_params 
        params.require(:car).permit(:year, :make, :model, :trim, :user_id)
    end
end
