import Todo from '/components/todo';

class TodoList extends React.Component {

	static get contextTypes() {
		return {
			store: React.PropTypes.object.isRequired
		}
	}

	//component constructor
	componentDidMount() {
		this.context.store.addChangeListener(this._onChange.bind(this));
	}

	//component destructor
	componentWillUnmount() {
		this.context.store.removeChangeListener(this._onChange.bind(this));
	}


	render() {
		return(
			<div>
				{this.context.store.todos().map((todo, i) => {
					return( 
						<Todo key={i} {... todo} />
					);
				})}
			</div>
		);
	}

	_onChange() {
		this.forceUpdate();
	}
}

export default TodoList;