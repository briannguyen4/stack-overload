class MainController < ActionController::Base  
    before_action :force_json, only: :search

    def search
        @questions = Question.includes(:tags).ransack(title_cont: params[:q]).result(distinct:true)
    end  

  private
    
    def force_json
        request.format = :json
    end
end

  