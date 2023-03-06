Message.destroy_all

Message.create! ([
  {msg: 'Howdy, partner!'},
  {msg: 'Hey there, freshman!'},
  {msg: 'I come in peace!'},
  {msg: 'Ahoy, matey!'},
  {msg: 'At least, we meet for the first time for the last time!'}
])

puts "Created #{Message.count} messages"
Message.all.each {|m| puts m.msg}
