const quizData = [
    {
        question: "What language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Java", "C#", "JavaScript", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "Which language is known for its use in data science?",
        options: ["Java", "C++", "Python", "PHP"],
        answer: "Python"
    },
    // Add more questions as needed
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${data.question}</p>
            ${data.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateResults() {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === data.answer) {
            score++;
        }
    });
    return score;
}

document.getElementById('submit').addEventListener('click', () => {
    const score = calculateResults();
    const totalQuestions = quizData.length;
    document.getElementById('results').innerText = `You scored ${score} out of ${totalQuestions}`;
});

// Load the quiz on page load
window.onload = loadQuiz;