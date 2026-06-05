let step = "name";

let lead = {
    name: "",
    email: "",
    phone: ""
};

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

async function saveLead() {

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbwFLgUNUEQbriXQG3QR6XCrogaU8s_IzapNpI93BEL0CrZQhu24pXkkNDZGKMMtR5OQ5w/exec",
            {
                method: "POST",
                body: JSON.stringify(lead)
            }
        );

        addBotMessage(
            "Thanks! Your information has been submitted."
        );

    } catch (error) {

        addBotMessage(
            "There was a problem saving your information."
        );

        console.error(error);
    }
}

function addBotMessage(message) {

    let chatBox =
        document.getElementById("chat-box");

    chatBox.innerHTML +=
        `<p><b>Bot:</b> ${message}</p>`;

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

function sendMessage() {

    let input =
        document.getElementById("user-input");

    let chatBox =
        document.getElementById("chat-box");

    let message =
        input.value.trim();

    if(message === "")
        return;

    chatBox.innerHTML +=
        `<p><b>You:</b> ${message}</p>`;

    if(step === "name") {

        lead.name = message;

        addBotMessage(
            "Great! What's your email?"
        );

        step = "email";
    }

    else if(step === "email") {

        lead.email = message;

        addBotMessage(
            "Perfect. What's your phone number?"
        );

        step = "phone";
    }

    else if(step === "phone") {

        lead.phone = message;

        addBotMessage(
            "Submitting your information..."
        );

        saveLead();

        step = "done";
    }

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

document
.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter") {
        sendMessage();
    }
});
