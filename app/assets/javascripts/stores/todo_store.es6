import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this._todos = [];
		
		AppDispatcher.register((payload) => {
			switch(payload.actionType) {
				case Constants.ADD_TODO:
					this.addTodo(payload.todo);
					this.emitChange();
					break;
				case Constants.SET_TODOS:
					this.setTodos(payload.todos);
					this.emitChange();
					break;
				default:
					//NO-OP
			}
		})
	}

	addTodo(todo) {
		this._todos[todo.id || this._todos.length] = todo;
	}

	setTodos(todos) {
		todos.forEach(todo => {
			this.addTodo(todo);
		})
	}

	todos() {
		return this._todos;
	}

	// These 3 methods (addChangeListener, removeChangeListener, emitChange)
	// are required by the flux framework
	addChangeListener (callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener (callback) {
		this.remove(Constants.CHANGE_EVENT, callback);
	}

	emitChange () {
		this.emit(Constants.CHANGE_EVENT);
	}
}

export default TodoStore;