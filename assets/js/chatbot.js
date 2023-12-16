var messageHistory = [];

document.getElementById('send-message').addEventListener('click', function() {
    var userInput = document.getElementById('chat-input').value;
    sendMessage(userInput);
});

function sendMessage(message) {
    messageHistory.push(message);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayMessage('Bot: ' + this.responseText);
        }
        else if (this.readyState == 4 && this.status != 200) {
            displayMessage('Bot: ' + 'Sorry, I\'m having trouble communicating with the server. Please try again later.');
            displayMessage('Bot: ' + 'Error code: ' + this.status);
            displayMessage('Bot: ' + 'Error message: ' + this.statusText);
        }
    };

    xhr.open("POST", "https://jbpt2kef4k.execute-api.us-west-2.amazonaws.com/default/jmumfChatbot");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ messages: messageHistory }));

    displayMessage('You: ' + message);
}

function displayMessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML += '<div>' + message + '</div>';
    document.getElementById('chat-input').value = ''; // Clear input field
}