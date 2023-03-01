Message.destroy_all

Message.create! ([
  {msg: 'message 1'},
  {msg: 'message 2'},
  {msg: 'message 3'},
  {msg: 'message 4'},
  {msg: 'message 5'}
])

puts "Created #{Message.count} messages"