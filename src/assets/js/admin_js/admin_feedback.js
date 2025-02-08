function openChat(element, customerName) {
    document.getElementById('chatBox').style.display = 'block';
    document.getElementById('chatHeader').innerText = 'Chat với ' + customerName;
    document.getElementById('chatContent').innerHTML = '<p><strong>' + customerName + ':</strong> Xin chào, tôi cần hỗ trợ!</p>';
    element.classList.remove('unread');
}

function sendMessage() {
    var message = document.getElementById('chatMessage').value;
    if (message.trim() !== '') {
        var chatContent = document.getElementById('chatContent');
        chatContent.innerHTML += '<p><strong>Bạn:</strong> ' + message + '</p>';
        document.getElementById('chatMessage').value = '';
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}