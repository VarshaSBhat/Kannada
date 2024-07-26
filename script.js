let currentQuestionIndex = 0;
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            showQuestion();
        });

    document.getElementById('next-button').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert('Quiz completed!');
            window.location.href = 'index.html';
        }
    });
});

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    questionContainer.innerHTML = '';
    answerButtons.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('button');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(index) {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (index === correctAnswerIndex) {
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}
