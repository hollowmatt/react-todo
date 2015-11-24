//ToDo App
var TodoApp = React.createClass({
	//get data from the api
	loadTodos: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	//initial status
	getInitialState: function() {
		return {data:[]};
	},

	//Setup a polling frequency, to get latest data
	componentDidMount: function() {
		this.loadTodos();
		setInterval(this.loadTodos, this.props.pollFrequency);
	},

	//render the app
	render: function() {
		return (
			<div className="container">
				<Header title={this.props.title}/>
				<div className="todoContainer">
					<div className="row formRow">
						<div className="col-md-12">
							<TodoForm />
						</div>
					</div>
					<div className="row listRow">
						<div className="col-md-12">
							<TodoList data={this.state.data} />
						</div>
					</div>
					<div className="row filterRow">
						<div className="col-md-12">
							<TodoFilter  items={2}/>
						</div>
					</div>
				</div>
			</div>
		);	
	}
});

//Nav and Title
var Header = React.createClass({
	render: function() {
		return (
			<h1 className="todoHeader">{this.props.title}</h1>
		);	
	}
});

//ToDo Input Form
var TodoForm = React.createClass({
	render: function() {
		return (
			<form className="todoForm">
				<input
					type="text"
					className="boxy todoInput"
					placeholder="What needs to be done?" />
				<input 
					type="submit"
					className="btn btn-primary todoAddButton"
					value="Add"/>
			</form>
		);
	}
});

//ToDo List
var TodoList = React.createClass({
	//TODO: Replace data here with Server data
	render: function() {
		var todos = this.props.data.map(function(item) {
			return (
				<li className="todoItem" key={item.id}>
					{item.text}
				</li>	
			);
		});
		return (
			<div className="todoList">
				<ul>
					{todos}
				</ul>
			</div>
		);	
	}
});

//ToDo Filter
var TodoFilter = React.createClass({
	render: function(){
		return (
			<div className="todoFilter">
				<span className="itemCount">{this.props.items} items left </span>
				<button type="button" className="btn btn-default allButton"  name="allButton">All</button>
				<button className="btn btn-link activeButton" name="activeButton">Active</button>
				<button className="btn btn-link completeButton" name="completeButton">Completed</button>
			</div>	
		);
	}
});

//Render Page
ReactDOM.render(
	<TodoApp title="React TODO" url='/api/todos' pollFrequency={2000} />,
	document.getElementById('content')
);
