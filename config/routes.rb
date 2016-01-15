Rails.application.routes.draw do

  root 'todos#index'
  
  resources :todos 

  get 'filter', to: 'todos#index'

  post 'todos/new' => 'todos#save'
end
