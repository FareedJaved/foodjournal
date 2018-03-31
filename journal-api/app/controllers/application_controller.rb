class ApplicationController < ActionController::API
  def hello
    render json: {"name": "Fareed Javed"}
  end
end
