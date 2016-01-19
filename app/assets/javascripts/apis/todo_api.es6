class TodoApi {

	static token() {
		let el = document.querySelector('meta[name="csrf-token"]');
		return el ? el.getAttribute('content') : '';
	}

	static headers() {
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-CSRF-Token': this.token(),
			'X-Requested-With': 'XMLHttpRequest'
		}
	}

	static post(route, params) {
		return this.xhr(route, params, 'post');
	}

	// this will make it easier to add new verbs
	static xhr(route, params, verb) {
		return fetch(`${route}.json`, 
								 _.merge({
								 		method: verb, 
								 		credentials: 'include', 
								 		headers: this.headers()
								 	}, 
								 	{ 
								 		body: JSON.stringify(params) 
								 	})
								);
	}
}

export default TodoApi;