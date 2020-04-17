class Api::AnswersController < ApplicationController
    def create
        @answer = Answer.create(answer_params)
        if @answer.save
            render 'api/answers/show'
        else
            render json: @answer.errors.full_messages, status:422
        end
    end
    
    def show
        @answer = Answer.find(params[:id])
        render '/api/answers/show', include: :author
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end