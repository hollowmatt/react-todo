class TodosController < ApplicationController

	def index
		if (params.has_key?(:completed))
			case params[:completed]
			when "true"
				@todos = Todo.where(completed: true)
			when "false"
				@todos = Todo.where(completed: false)
			else
				@todos = Todo.all
			end
		else
			@todos = Todo.all
		end
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

