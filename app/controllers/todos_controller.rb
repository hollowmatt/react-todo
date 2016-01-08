class TodosController < ApplicationController

	def index
		@todos = Todo.all
	end

	def show
		@todo = Todo.find(params[:id])
	end

	def create
		@todo = Todo.create(todo_params)
	end

	def save
		@todo = Todo.new(todo_params)
		if @todo.save
			redirect_to "/"
		else
			@todos = Todo.all
			render 'index'
		end
	end

	private
		
		def todo_params
			params.required(:todo).permit(:text, :completed)
		end
end

