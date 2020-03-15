# frozen_string_literal: true

class VideoController < ApplicationController
  def index
    @videos = Video.all
    render json: @videos
  end

  def create; end

  def update; end

  def destroy; end
end
