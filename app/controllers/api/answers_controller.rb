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
        @score = @answer.score
        render '/api/answers/show'
    end

    def index
        question = Question.find(params[:question_id])
        @answers = question.answers
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end