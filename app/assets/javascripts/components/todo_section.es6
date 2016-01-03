import TodoList from '/components/todo_list';
import TodoForm from '/components/todo_form';
import TodoFilter from '/components/todo_filter';

class TodoSection extends React.Component {

	constructor(props) {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1 className="todoHeader">TODO List</h1> 
				<div className="todoContainer">
					<div className="row formRow">
						<div className="col-md-12">
							<TodoForm/>
						</div>
					</div>
					<div className="row listRow">
						<div className="col-md-12">
							<TodoList />
						</div>
					</div>
					<div className="row filterRow">
						<div className="col-md-12">
							<TodoFilter/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

window.TodoSection = TodoSection;
