class Todo extends React.Component {

	static get propTypes() {
		return {
			text: React.PropTypes.string,
			completed: React.PropTypes.bool
		}
	}
	
	render() {
		console.log(this.props);
		return (
			<div className={this.props.completed ? 'todo-item hide' : 'todo-item'}>
				<div> <strong>Todo:</strong> {this.props.text}</div>
				<div> <strong>Completed:</strong> {this.props.completed ? 'Yes' : 'No'}</div>
			</div>
		);
	}
}

window.Todo = Todo;
export default Todo;