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
		//setInterval(this.loadTodos, this.props.pollFrequency);
	},

	handleTodoSubmit: function(todo) {
		var todos = this.state.data;
		todo.id = Date.now();
		var newTodos = todos.concat([todo]);
		this.setState({data: newTodos});
		var saveData = {text: todo.text, completed: false};

		//post the new Todo
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: saveData,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	//render the app
	render: function() {
		return (
			<div className="container">
				<Header title={this.props.title}/>
				<div className="todoContainer">
					<div className="row formRow">
						<div className="col-md-12">
							<TodoForm onTodoSubmit={this.handleTodoSubmit}/>
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
	getInitialState: function() {
		return {text: ''};
	},

	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var todoText = this.state.text.trim();
		if(!todoText) {
			return;
		}
		this.props.onTodoSubmit({text: todoText, completed: false});
		this.setState({text: ''});
	},

	render: function() {
		return (
			<form className="todoForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="boxy todoInput"
					placeholder="What needs to be done?" 
					value={this.state.text}
					onChange={this.handleTextChange}/>
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
	edit: function (todo) {
		this.setState({editing: todo.id});
	},

	save: function (todoToSave, text) {
		this.props.data.save(todoToSave, text);
		this.setState({editing: null});
	},

	render: function() {
		var todos = this.props.data.map(function(item) {
			return (
				<TodoItem 
					todo={item} 
					key={item.id}
					onEdit={this.edit(item)}
					onSave={this.save(item)}
					onCancel={this.cancel}/>	
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

var TodoItem = React.createClass({
	render: function () {
		return (
			<li className="todoItem">
				<input type="hidden" value={this.props.todo.id}/>
				<input className="todoCheck" type="checkbox" checked={this.props.todo.completed}/>
        <input className="todoText todoInput boxy" value={this.props.todo.text}/>
        <button className="btn btn-danger todoComplete">Delete</button>
			</li>		
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
