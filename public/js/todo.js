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
				<div className="row">
					<div className="col-md-12">
						<TodoList />
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

// ToDo List
var TodoList = React.createClass({
	//TODO: Replace data here with Server data
	render: function() {
		return (
			<div className="todoList">
				<ul>
					<li> Have a nap </li>
					<li> Eat some food </li>
				</ul>
			</div>
		);	
	}
});


ReactDOM.render(
	<TodoApp title="React TODO" />,
	document.getElementById('content')
);
