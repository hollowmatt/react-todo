import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class Actions {

	//for later
	static addTodo(params){
		AppDispatcher.dispatch({
			actionType: Constants.ADD_TODO,
			todo: params
		});
	}

	static setTodos(params) {
		AppDispatcher.dispatch({
			actionType: Constants.SET_TODOS,
			todos: params
		});
	}

}

export default Actions;