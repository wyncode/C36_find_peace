class OrganizationsController < ApplicationController
    def index 
        @organizations = Organization.all
        @organizations = Organization.by_description(params[:description]) if params[:description]
        render json: @organizations
    end
end