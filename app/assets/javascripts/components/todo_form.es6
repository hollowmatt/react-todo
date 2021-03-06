class TodoForm extends React.Component {
	
	static get contextTypes() {
		return {
			actions: React.PropTypes.func.isRequired
		}
	}

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
		this.context.actions.addTodo(this.state);
		this.setState(this.defaultState);
	}

	render() {
		return(
			<div>
				<form className="form-inline todo-form-padding todo-form-margin">
			 		<div className="form-group">
						<label htmlFor="todoInput">To Do</label>
						<input id="todoInput" className="form-control todo-margin-left todo-margin-right todo-input" type="text" name="text" value={this.state.text} onChange={this.onFieldChange.bind(this)}/>
						<input type="hidden" name="completed" value="false"/>
					</div>
					<button className="btn btn-primary todo-button" onClick={this.submitTodo.bind(this)} type="submit">Submit</button>
				</form>
			</div>
		);
	}	
}

export default TodoForm;