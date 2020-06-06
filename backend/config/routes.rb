Rails.application.routes.draw do
  resources :cars, only: [:index, :create, :destroy]
  resources :users, only: [ :index, :show, :create, :destroy]
end
