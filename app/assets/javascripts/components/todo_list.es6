import Todo from '/components/todo';

class TodoList extends React.Component {
	
	constructor(props) {
		super();
		this.state = {};
	}

	render() {
		return(
			<div>
				<Todo/>
			</div>
		);
	}	
}

export default TodoList;