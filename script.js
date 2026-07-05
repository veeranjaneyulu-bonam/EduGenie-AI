async function askAI() {

    let question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    let chat = document.getElementById("chatBox");

    chat.innerHTML += `
    <div class="user-message">
        ${question}
    </div>`;

    chat.innerHTML += `
    <div class="bot-message" id="loading">
        ⏳ EduGenie is thinking...
    </div>`;

    chat.scrollTop = chat.scrollHeight;

    try {

        const response = await fetch(`/ask?question=${encodeURIComponent(question)}`);
        const data = await response.json();

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ${data.answer.replace(/\n/g, "<br>")}
        </div>`;

    } catch (error) {

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ❌ Error getting AI response.
        </div>`;
    }

    document.getElementById("question").value = "";
    chat.scrollTop = chat.scrollHeight;
}


async function generateQuiz() {

    let topic = document.getElementById("question").value;

    if (topic.trim() === "") {
        alert("Please enter a topic.");
        return;
    }

    let chat = document.getElementById("chatBox");

    chat.innerHTML += `
    <div class="user-message">
        📘 Generate a quiz on: <b>${topic}</b>
    </div>`;

    chat.innerHTML += `
    <div class="bot-message" id="loading">
        ⏳ Generating quiz...
    </div>`;

    chat.scrollTop = chat.scrollHeight;

    try {

        const response = await fetch(`/quiz?topic=${encodeURIComponent(topic)}`);
        const data = await response.json();

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ${data.quiz.replace(/\n/g, "<br>")}
        </div>`;

    } catch (error) {

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ❌ Error generating quiz.
        </div>`;
    }

    document.getElementById("question").value = "";
    chat.scrollTop = chat.scrollHeight;
}


function clearChat() {

    document.getElementById("chatBox").innerHTML = `
    <div class="bot-message">
        👋 Hello! I'm <b>EduGenie</b>.<br>
        Ask me anything about programming, AI, DBMS, OS, DSA, or any subject.
    </div>`;
}
async function generateRoadmap() {

    let career = document.getElementById("question").value;

    if (career.trim() === "") {
        alert("Please enter a career or technology.");
        return;
    }

    let chat = document.getElementById("chatBox");

    chat.innerHTML += `
    <div class="user-message">
        🗺️ Generate Roadmap for <b>${career}</b>
    </div>`;

    chat.innerHTML += `
    <div class="bot-message" id="loading">
        ⏳ Generating Roadmap...
    </div>`;

    chat.scrollTop = chat.scrollHeight;

    try {

        const response = await fetch(`/roadmap?career=${encodeURIComponent(career)}`);

        const data = await response.json();

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ${data.roadmap.replace(/\n/g,"<br>")}
        </div>`;

    } catch {

        document.getElementById("loading").remove();

        chat.innerHTML += `
        <div class="bot-message">
            ❌ Error generating roadmap.
        </div>`;
    }

    document.getElementById("question").value = "";

    chat.scrollTop = chat.scrollHeight;
}