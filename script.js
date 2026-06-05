const widget =
    document.getElementById("chat-widget");

const toggleButton =
    document.getElementById("chat-toggle");

const closeButton =
    document.getElementById("close-chat");

toggleButton.addEventListener("click", () => {

    widget.style.display = "flex";
});

closeButton.addEventListener("click", () => {

    widget.style.display = "none";
});

function sendMessage() {

    let input =
        document.getElementById("user-input");

    let chatBox =
        document.getElementById("chat-box");

    let message =
        input.value;

    if(message === "")
        return;

    chatBox.innerHTML +=
        `<p><b>You:</b> ${message}</p>`;

    chatBox.innerHTML +=
        `<p><b>Bot:</b> Thanks for your message!</p>`;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

document
.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();
    }
});
