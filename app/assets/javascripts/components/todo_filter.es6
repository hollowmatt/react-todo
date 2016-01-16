class TodoFilter extends React.Component {
	
	constructor(props) {
		super();
		this.state = {};
	}

	onFieldChange(event) {
		console.log(event);
	}

	render() {
		return(
			<div>
				<form className="form-inline todo-form-padding todo-form-margin">
			 		<div className="form-inline">
						<label>Show only completed: </label>
						<input type="radio" className="form-control" name="completed" value="true" onChange={this.onFieldChange.bind(this)}/>
						<label>Show only incomplete: </label>
						<input type="radio" className="form-control" name="completed" value="false" onChange={this.onFieldChange.bind(this)}/>
						<label>Show all: </label>
						<input type="radio" className="form-control" name="completed" value="all" onChange={this.onFieldChange.bind(this)}/>
					</div>
				</form>
			</div>
		);
	}	
}

export default TodoFilter;