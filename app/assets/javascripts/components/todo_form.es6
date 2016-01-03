class TodoForm extends React.Component {
	
	constructor(props) {
		super();
		this.defaultState = { text:'', completed:false};
		this.state = {};
	}

	onFieldChange(event) {
		let prop = {};
		prop[event.target.name] = event.target.value; 
		this.setState(prop);
	}

	submitTodo(event) {
		event.preventDefault();
		this.context.actions.addComment(this.state);
		this.setState(this.defaultState);
	}

	render() {
		return(
			<div>
				<label>To Do</label>
				<input type="text" name="text" value={this.state.text} onChange={this.onFieldChange.bind(this)}/>
				<button onClick={this.submitTodo.bind(this)} type="submit">Submit</button>
			</div>
		);
	}	
}

export default TodoForm;