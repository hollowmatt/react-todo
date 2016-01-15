class TodosController < ApplicationController

	def index
		if (params.has_key?(:completed))
			puts("completed flag value: " + params[:completed])
			if params[:completed] == "true"
				@todos = Todo.where(completed: true)
			else
				@todos = Todo.where(completed: false)
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

