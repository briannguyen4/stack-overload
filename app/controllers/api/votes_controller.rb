class Api::VotesController < ApplicationController
    before_action :require_logged_in, only: [:upvote, :downvote]

    def upvote
        add_vote(1)
    end

    def downvote
        add_vote(-1)
    end

    private
    def add_vote(val)
        if params[:question_id].present?
            @question = Question.includes(:votes).find(params[:question_id])
            @vote = @question.votes.where(user_id: current_user.id).first 
            if @vote
                if @vote.value == val
                    @vote.destroy!
                else  
                    @vote.update_attribute(:value, val)
                end
            else
                @vote = current_user.votes.create({value: val, voteable: @question})
            end
            render '/api/questions/show'
        elsif params[:answer_id].present?
            @answer = Answer.find(params[:answer_id])
            @vote = @answer.votes.where(user_id: current_user.id).first
            if @vote
                if @vote.value == val
                    @vote.destroy!
                else  
                    @vote.update_attribute(:value, val)
                end
            else  
                @vote = current_user.votes.create({value: val, voteable: @answer})
            end
            render '/api/answers/show'
        end
    end
end
