Rails.application.routes.draw do

  root 'todos#index'
  resources :todos

  post 'todos/new' => 'todos#save'
end
