require 'webrick'
require 'json'

port = ENV['PORT'].nil? ? 3000 : ENV['PORT'].to_i

puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

server.mount_proc '/api/todos' do |req, res|
  todos = JSON.parse(File.read('./data/todos.json', encoding: 'UTF-8'))

  if req.request_method == 'POST'
    # Assume it's well formed
    todo = { id: (Time.now.to_f * 1000).to_i }
    req.query.each do |key, value|
      todo[key] = value.force_encoding('UTF-8')
    end
    todos << todo
    File.write(
      './api/todos.json',
      JSON.pretty_generate(todos, indent: '    '),
      encoding: 'UTF-8'
    )
  end

  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res.body = JSON.generate(todos)
end

trap('INT') { server.shutdown }

server.start