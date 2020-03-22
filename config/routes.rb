# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  get 'about', to: 'about#index'
  get 'help', to: 'help#index'
  get 'nav', to: 'nav#index'
  get 'staticpage', to: 'staticpage#index'
  get 'yogamap', to: 'yogamap#index'
  resources :organizations, only: [:index]
  resource :chat, only: [:show]
  get 'video', to: 'video#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
