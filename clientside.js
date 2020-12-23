// const socket= io('http://localhost:3000');
// const messageForm=document.getElementById('send-container')
// const messageInput=document.getElementById('message-input');
// const messagecontainer=document.getElementById('message-container')

// const names=prompt("whats your Name");
// apppendMessage('You joined');
// socket.emit('new-user',names)


// socket.on('user-connected',names=>{
//     // console.log(data)
//     apppendMessage(`${names} is connected`)
// })

// socket.io('user-disconnected',names=>{
//     apppendMessage(`${names} is disconnected`)
// })

// socket.on('chat-message',data=>{
//     // console.log(data)
//     apppendMessage(`${data.names}:${data.message}`)
// })

// messageForm.addEventListener('submit',e=>{
//     e.preventDefault();
//     let message=messageInput.value;
//     apppendMessage(`You :${message}`)
//     socket.emit('send-chat-message',message)
//     messageInput.value=''

// })


// function apppendMessage(message){
//     const messageElement=document.createElement('div');
//     messageElement.innerText=message;
//     messagecontainer.append(messageElement);

// }




















const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}