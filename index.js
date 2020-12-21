const io = require('socket.io')(3000, {
    cors: {
      origin: '*',
    }
  });

io.on('connection',socket=>{
  
       // socket.emit('chat-message','this is print by function chat-message')

       socket.on('send-chat-message',message=>{
           socket.broadcast.emit('chat-message',message)
       })
    })