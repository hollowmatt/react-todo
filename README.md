# React Todo: V2, now with Rails

This is my take on the TodoMVC [todoMVC](http://todomvc.com/examples/react/#/).

## To use

While the initial version used a simple server implementation (to serve static files from `public/` and handle requests to `/api/todo` to fetch or add data), this V2 now uses a Rails implementation for the API and data manangement.

You will need to clone this repo, then do a 'bundle install' to get all of the gems and such. 

Start theserver with the following:

### Rails
```sh
rails s
```

And visit <http://localhost:3000/>. 

