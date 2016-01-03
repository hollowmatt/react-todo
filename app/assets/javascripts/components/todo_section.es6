import TodoList from '/components/todo_list';

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
							<p>Todo form goes here</p>
						</div>
					</div>
					<div className="row listRow">
						<div className="col-md-12">
							<TodoList />
						</div>
					</div>
					<div className="row filterRow">
						<div className="col-md-12">
							<p>Todo filter goes here</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

window.TodoSection = TodoSection;