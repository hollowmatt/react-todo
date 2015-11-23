var TodoApp = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Header title={this.props.title}/>
				<div className="row">
					<div className="col-md-12">
						<TodoForm />
					</div>
				</div>
			</div>
		);	
	}
});

// Nav and Title
var Header = React.createClass({
	render: function() {
		return (
			<h1>{this.props.title}</h1>
		);	
	}
});

// ToDo Input Form
var TodoForm = React.createClass({
	render: function() {
		return (
			<form className="todoForm">
				<input
					type="text"
					className="boxy"
					placeholder="What needs to be done?" />
				<input 
					type="submit"
					className="btn btn-primary"
					value="Add"/>
			</form>
		);
	}
});



ReactDOM.render(
	<TodoApp title="React TODO" />,
	document.getElementById('content')
);
