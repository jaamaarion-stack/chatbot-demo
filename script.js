function sendMessage() {

    let input = document.getElementById("user-input");

    let chatBox = document.getElementById("chat-box");

    let message = input.value;

    if(message === "") return;

    chatBox.innerHTML +=
        `<p><b>You:</b> ${message}</p>`;

    chatBox.innerHTML +=
        `<p><b>Bot:</b> Thanks for your message!</p>`;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}
