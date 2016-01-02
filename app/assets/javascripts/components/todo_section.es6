class TodoSection extends React.Component {

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
							<p>Todo list goes here</p>
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