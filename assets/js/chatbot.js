var messageHistory = [];

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        sendMessage(document.getElementById('chat-input').value);
    }
});

document.getElementById('send-message').addEventListener('click', function() {
    var userInput = document.getElementById('chat-input').value;
    sendMessage(userInput);
});

function sendMessage(message) {
    messageHistory.push(message);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.OPENED) {
            showLoading(true); // Show loading icon when request is sent
        }
        if (this.readyState == 4) {
            showLoading(false); // Hide loading icon on response or error
        }
        if (this.readyState == 4 && this.status == 200) {
            displayMessage(this.responseText, 'bot');
            messageHistory.push(this.responseText);
        }
        else if (this.readyState == 4 && this.status != 200) {
            displayMessage('Sorry, I\'m having trouble communicating with the server. Please try again later.', 'bot');
        }
    };

    xhr.open("POST", "https://jbpt2kef4k.execute-api.us-west-2.amazonaws.com/default/jmumfChatbot");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ messages: messageHistory }));

    displayMessage(message, 'user');
}

function displayMessage(message, type) {
    var chatMessages = document.getElementById('chat-messages');
    if (type == 'bot') {
        chatMessages.innerHTML += '<div class="bot-message"><span class="icon bot-icon"></span>' + message + '</div>';
    }
    else {
        chatMessages.innerHTML += '<div class="user-message"><span class="icon user-icon"></span>' + message + '</div>';
    }
    document.getElementById('chat-input').value = ''; // Clear input field
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}