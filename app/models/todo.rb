class Todo < ActiveRecord::Base
	validates_presence_of :text, :message => "for To Do cannot be blank"
end
