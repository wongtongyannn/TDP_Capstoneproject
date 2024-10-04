// uncommment this after dialog flow is implemented!!

// const dialogflow = require('@google-cloud/dialogflow');
// const uuid = require('uuid');

// // Creates a client
// const sessionClient = new dialogflow.SessionsClient();
// const projectId = 'YOUR_PROJECT_ID'; // Replace with your project ID
// const sessionId = uuid.v4();
// const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

// // Function to send message to Dialogflow
// async function sendToDialogflow(text) {
//     const request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 text: text,
//                 languageCode: 'en-US',
//             },
//         },
//     };

//     const responses = await sessionClient.detectIntent(request);
//     return responses[0].queryResult.fulfillmentText; // Get the response text
// }

// // Modify the sendMessage function
// async function sendMessage() {
//     const userMessage = chatbotInput.value;
//     if (userMessage.trim() !== "") {
//         // Create user message element
//         const userMessageElement = document.createElement('div');
//         userMessageElement.className = 'message user';
//         userMessageElement.textContent = userMessage;
//         chatbotMessages.appendChild(userMessageElement);

//         // Clear input
//         chatbotInput.value = '';

//         // Get response from Dialogflow
//         const botResponse = await sendToDialogflow(userMessage);
        
//         // Create bot response element
//         const botMessageElement = document.createElement('div');
//         botMessageElement.className = 'message bot';
//         botMessageElement.textContent = botResponse;
//         chatbotMessages.appendChild(botMessageElement);

//         // Scroll to the latest message
//         chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
//     }
// }


// Get DOM elements
const chatbot = document.getElementById('chatbot');
const sendBtn = document.getElementById('send-btn');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');
const closeChatBtn = document.getElementById('close-chat');

// Function to send a message
function sendMessage() {
    const userMessage = chatbotInput.value;
    if (userMessage.trim() !== "") {
        // Create user message element
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'message user';
        userMessageElement.textContent = userMessage;
        chatbotMessages.appendChild(userMessageElement);

        // Clear input
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot';
            botMessageElement.textContent = 'This is an automated response!';
            chatbotMessages.appendChild(botMessageElement);

            // Scroll to the latest message
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000); // Simulate response delay
    }
}

// Event listener for send button
sendBtn.addEventListener('click', sendMessage);

// Optional: send message on Enter key press
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Toggle chat open and collapsed state
closeChatBtn.addEventListener('click', () => {
    console.log('Close button clicked');
    chatbot.classList.toggle('collapsed');
    console.log(chatbot.classList);
});
