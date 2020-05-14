class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if params[:user][:password].empty?
            render json: ['Password cannot be empty'], status: 401
        elsif !params[:user][:email].include?('@')
            render json: ['The email is not a valid email address.'], status: 401
        elsif @user.nil?
            render json: ['The email or password is incorrect.'], status: 401
        else
            login!(@user)
            render 'api/users/show';
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["No user to log out"], status: 404
        end
    end
end

