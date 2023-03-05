Rails.application.routes.draw do
  root 'messages#index'
  get 'message', to: 'messages#random'
end
