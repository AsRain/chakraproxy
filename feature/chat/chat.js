const socket = new WebSocket('ws://your-server-url'); // WebSocketサーバーのURLに置き換える

const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

socket.onopen = (event) => {
    console.log('Connected to the WebSocket server');
};

socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.text);
};

socket.onclose = (event) => {
    console.log('Connection to the WebSocket server is closed');
};

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText) {
        const message = { text: messageText };
        socket.send(JSON.stringify(message));
        messageInput.value = '';
    }
});

function displayMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.innerText = text;
    messages.appendChild(messageElement);
}
