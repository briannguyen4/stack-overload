Rails.application.routes.draw do
  get :search, controller: :main
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do 
      member do
        post 'upvote', controller: 'votes', as: :upvote
        post 'downvote', controller: 'votes', as: :downvote
      end
      resources :answers, only: [:create, :show] do
        member do
          post 'upvote', controller: 'votes', as: :upvote
          post 'downvote', controller: 'votes', as: :downvote
        end
      end
    end

  end
  root 'static_pages#root'
end
