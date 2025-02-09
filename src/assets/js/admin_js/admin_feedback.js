function openChat(element, customerName) {
    const chatBox = document.getElementById('chatBox');
    const chatHeader = document.getElementById('chatHeader');
    const chatContent = document.getElementById('chatContent');

    chatBox.style.display = 'block';

    chatHeader.innerHTML = `
        <img src="/src/assets/img/avatar.jfif" alt="Avatar" class="avatar">
        ${customerName}
        <i class="fa-solid fa-x close-chat" onclick="closeChat()"></i>
    `;

    chatContent.innerHTML = `<p><strong>${customerName}:</strong> Xin chào, tôi cần hỗ trợ!</p>`;

    element.classList.remove('unread');
}

function closeChat() {
    document.getElementById('chatBox').style.display = 'none';
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

document.getElementById("chatMessage").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
