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

    end

    private

    def car_params 
        params.require(:car).permit(:year, :make, :model, :trim, :user_id)
    end
end
