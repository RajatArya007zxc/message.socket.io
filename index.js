const io = require('socket.io')(3000, {
    cors: {
      origin: '*',
    }
  });

const users={}

io.on('connection',socket=>{
  
       // socket.emit('chat-message','this is print by function chat-message')

        socket.on('new-user',names=>{
  
             users[socket.id]=names;
             socket.broadcast.emit('user-connected',names)
        })
       socket.on('send-chat-message',message=>{
           socket.broadcast.emit('chat-message',message)
       })
    })