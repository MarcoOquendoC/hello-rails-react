Message.destroy_all

Message.create! ([
  {msg: 'Hello'},
  {msg: 'Good Morning'},
  {msg: 'Good Afternoon'},
  {msg: 'Good Night'},
  {msg: 'Greetings'}
])

puts "Created #{Message.count} messages"
Message.all.each {|m| puts m.msg}
