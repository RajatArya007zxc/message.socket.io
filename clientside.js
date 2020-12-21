const socket= io('http://localhost:3000');
const messageForm=document.getElementById('send-container')
const messageInput=document.getElementById('message-input');
const messagecontainer=document.getElementById('message-container')

const names=prompt("whats your Name");
apppendMessage('You joined');
socket.emit('new-user',names)


socket.on('user-connected',names=>{
    // console.log(data)
    apppendMessage(`${names} is connected`)
})


socket.on('chat-message',data=>{
    // console.log(data)
    apppendMessage(data)
})

messageForm.addEventListener('submit',e=>{
    e.preventDefault();
    let message=messageInput.value;
    socket.emit('send-chat-message',message)
    messageInput.value=''

})


function apppendMessage(message){
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messagecontainer.append(messageElement);

}