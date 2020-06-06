class UsersController < ApplicationController
    
    before_action :find_user, except: [:index, :create]

    def index
        users = User.all
        render json: users 
    end

    def show
        render json: @user
    end

    def create 
        user = User.create(user_params)
        render json: {message: "User Creation Successful"}
    end

    def destroy
        @user.destroy
        render json: {message: "User Removal Successful"}
    end


    private

    def user_params 
        params.require(:user).permit(:username)
    end

    def find_user
        @user = User.find_by(id: params[:id])
    end

end
