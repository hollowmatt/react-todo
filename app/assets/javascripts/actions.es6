import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import TodoApi from '/apis/todo_api';

class Actions {

	//for later
	static addTodo(params){
		console.log(params);
		TodoApi.post('/todos', {
			todo: params
		}).then(resp => {
			return resp.json();	
		}).then(todo => {
			AppDispatcher.dispatch({
				actionType: Constants.ADD_TODO,
				todo: params
			});
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